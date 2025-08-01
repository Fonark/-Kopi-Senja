document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      /* data dalam bentuk array */
      { id: 1, name: "biji-kopi1", img: "1.jpg", price: 28000 }, //isi yang dibungkus oleh {} adalah objek
      { id: 2, name: "biji-kopi2", img: "2.jpg", price: 25000 }, // Index adalah nomor posisi elemen dalam sebuah array atau list. contoh dari index adalah id adalah index yang ke 0,di objek ke 2 dari items.
      { id: 3, name: "biji-kopi3", img: "3.jpg", price: 21000 }, // value adalah nilai/isi dari index.
      { id: 4, name: "biji-kopi4", img: "4.jpg", price: 30000 },
      { id: 5, name: "biji-kopi5", img: "5.jpg", price: 32000 },
    ],
  }));

  Alpine.store("cart", {
    //store adalah tempat penyimpanan.
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      //cek apakah ada barang yang sama di cart
      const cartItem = this.items.find((item) => item.id === newItem.id);

      //jika belum ada / cart masih kosong
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        //jika barang sudah ada, cek apakah barang beda atau sama dengan yang ada di cart
        this.items = this.items.map((item) => {
          //jika barang berbeda
          if (item.id !== newItem.id) {
            return item;
          } else {
            //jika barang sudah ada,tambah  quantity dan totalnya
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }

      console.log(this.total);
    },
    remove(id) {
      const cartItem = this.items.find((item) => item.id === id);

      if (!cartItem) return; // pastikan item ada
      const price = Number(cartItem.price); // pastikan price adalah number

      if (cartItem.quantity > 1) {
        // jika masih lebih dari 1, cukup kurangi quantity
        this.items = this.items.map((item) => {
          if (item.id !== id) return item;
          item.quantity--;
          item.total = item.quantity * price;
          this.quantity--;
          this.total -= price;
          return item;
        });
      } else {
        // jika quantity tinggal 1, hapus item dari cart
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= price;
      }
    },
  });
});

function openModalManual(item) {
  const modal = document.querySelector("#item-detail-modal");
  if (!modal) return;

  modal.style.display = "flex";

  modal.querySelector("h3").textContent = item.name;
  modal.querySelector(".products-price").textContent = rupiah(item.price);

  const img = modal.querySelector("img");
  img.src = `./img/product-img/${item.img}`;
  img.alt = item.name;

  feather.replace();
}

document.addEventListener("click", function (e) {
  if (e.target.closest(".close-icon")) {
    document.querySelector("#item-detail-modal").style.display = "none";
  }
});

/* idr curency */
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
