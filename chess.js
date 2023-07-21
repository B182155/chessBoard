const chessboard = document.querySelector("#chess");

const chess = function (n) {
  // let toggleRows = 1;
  for (let i = 1; i <= n; i++) {
    const rows = document.createElement("div");
    rows.classList.add(`rows`);

    // let toggleColumns = toggleRows == 1 ? 1 : 0;

    for (let j = 1; j <= n; j++) {
      const items = document.createElement("div");

      if ((i + j) % 2 === 0) {
        // if (toggleColumns == 1) {
        items.classList.add("white");
      } else {
        items.classList.add("black");
      }
      // toggleColumns = 1 - toggleColumns;
      rows.append(items);
    }

    // toggleRows = 1 - toggleRows;
    chessboard.append(rows);
  }
  console.log(chessboard);
};

chess(8);
