onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = 'jangan badmood lagi ya'.split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 200); // jeda antar huruf (ms)
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
