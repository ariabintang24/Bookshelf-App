document.addEventListener("DOMContentLoaded", function () {
    const submitBook = document.getElementById("inputBook");

    submitBook.addEventListener("submit", function (event) {
        event.preventDefault();
        addBook();
        alert("Selamat, berhasil menambahkan buku!");
    });

    const searchBook = document.getElementById("searchBook");

    searchBook.addEventListener("submit", function (event) {
        event.preventDefault();
        const input = searchBook.querySelector("input").value;
        searchBooks(input);
    });

    if (isStorageExist()) {
        loadDataFromStorage();
    }
});

document.addEventListener("ondatasaved", () => {
    console.log("Berhasil menyimpan data!");
});

document.addEventListener("ondataloaded", () => {
    console.log("Data dimuat ulang!");
    refreshDataFromBooks();
});
