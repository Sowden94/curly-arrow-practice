// Preserve direct navigation; reveal topics on hover, keyboard focus or the toggle.
document.querySelectorAll('.practice-card').forEach(card => {
  const toggle = card.querySelector('.topics-toggle');
  const topics = card.querySelector('.practice-topics');
  let hovered = false;
  let focused = false;
  let pinned = false;
  let dismissed = false;
  let openTimer;
  let closeTimer;
  const cancelTimers = () => {
    clearTimeout(openTimer);
    clearTimeout(closeTimer);
  };
  const update = () => {
    const open = !dismissed && (hovered || focused || pinned);
    topics.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', `${open ? 'Hide' : 'Show'} Topics for ${card.querySelector('strong').textContent}`);
  };
  toggle.hidden = false;
  update();
  card.addEventListener('pointerenter', event => {
    if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;
    cancelTimers();
    openTimer = setTimeout(() => {
      hovered = true;
      dismissed = false;
      update();
    }, 500);
  });
  card.addEventListener('pointerleave', () => {
    cancelTimers();
    closeTimer = setTimeout(() => { hovered = false; update(); }, 180);
  });
  card.addEventListener('focusin', () => { focused = true; dismissed = false; update(); });
  card.addEventListener('focusout', event => {
    if (card.contains(event.relatedTarget)) return;
    focused = false;
    update();
  });
  toggle.addEventListener('click', () => {
    cancelTimers();
    if (pinned) { pinned = false; dismissed = true; }
    else { pinned = true; dismissed = false; }
    update();
  });
  card.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    cancelTimers();
    pinned = false;
    dismissed = true;
    update();
  });
});
