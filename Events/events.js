

    // --- Event Bubbling ---
    document.getElementById('parent').addEventListener('click', () => {
      console.log('Bubbling: parent');
    });

    document.getElementById('child').addEventListener('click', () => {
      console.log('Bubbling: child');
    });

    // --- Event Capturing ---
    document.getElementById('parent').addEventListener('click', () => {
      console.log('Capturing: parent');
    }, true); // true = capture phase

    document.getElementById('child').addEventListener('click', () => {
      console.log('Capturing: child');
    }, true); // true = capture phase

    // --- stopPropagation Example ---
    document.getElementById('child').addEventListener('click', (e) => {
      console.log('stopPropagation test');
      e.stopPropagation(); // stops bubbling to parent
    });

    // --- stopImmediatePropagation Example ---
    document.getElementById('child').addEventListener('click', (e) => {
      console.log('1st handler');
      e.stopImmediatePropagation(); // stops further handlers on the same element
    });

    document.getElementById('child').addEventListener('click', () => {
      console.log('2nd handler - won\'t run due to stopImmediatePropagation');
    });

    // --- preventDefault Example ---
    document.getElementById('child').addEventListener('click', (e) => {
      e.preventDefault(); // prevents default button behavior (like submitting a form)
      console.log('preventDefault called');
    });

