import { useState } from "react";
import Button from "../components/Button";
import Product from "../components/Product";

export default function Home() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "MacBook Air 15”",
      image: "/macbook_air_15.jpg",
      price: 26999999,
      category: "Laptop",
    },
    {
      id: 2,
      name: "iPhone 14 Pro",
      image: "/iphone_14_pro.jpg",
      price: 19999999,
      category: "Smartphone",
    },
    {
      id: 3,
      name: "iPhone 14",
      image: "/iphone_14.jpg",
      price: 15999999,
      category: "Smartphone",
    },
    {
      id: 4,
      name: "Apple Vision Pro",
      image: "/apple_vision_pro.jpg",
      price: 66999999,
      category: "Headset",
    },
    {
      id: 5,
      name: "Apple Watch Series 8",
      image: "apple_watch_series_8.jpg",
      price: 7999999,
      category: "Watch",
    },
    {
      id: 6,
      name: "iPad Pro",
      image: "/ipad_pro.jpg",
      price: 15999999,
      category: "Tablet",
    },
    {
      id: 7,
      name: "MacBook Air 15”",
      image: "/macbook_air_15.jpg",
      price: 26999999,
      category: "Laptop",
    },
    {
      id: 8,
      name: "iPhone 14 Pro",
      image: "/iphone_14_pro.jpg",
      price: 19999999,
      category: "Smartphone",
    },
    {
      id: 9,
      name: "iPhone 14",
      image: "/iphone_14.jpg",
      price: 15999999,
      category: "Smartphone",
    },
    {
      id: 10,
      name: "Apple Vision Pro",
      image: "/apple_vision_pro.jpg",
      price: 66999999,
      category: "Headset",
    },
    {
      id: 11,
      name: "Apple Watch Series 8",
      image: "apple_watch_series_8.jpg",
      price: 7999999,
      category: "Watch",
    },
    {
      id: 12,
      name: "iPad Pro",
      image: "/ipad_pro.jpg",
      price: 15999999,
      category: "Tablet",
    },
  ]);
  const [idSquence, setIdSequence] = useState(products.length);
  const [keyword, setKeyword] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [sortBy, setSortBy] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(1);
  const [editedProduct, setEditedProduct] = useState();
  const [newProduct, setNewProduct] = useState(false);
  const filteredSortedProducts = products
    .toSorted((a, b) => {
      if (sortOrder === "asc") {
        return a[sortBy] < b[sortBy] ? -1 : 1;
      } else {
        return a[sortBy] > b[sortBy] ? -1 : 1;
      }
    })
    .filter(
      (product) =>
        product.name.toLowerCase().includes(keyword) &&
        product.price >= minPrice &&
        product.price <= maxPrice
    );

  return (
    <div className="products">
      <header>
        <button className="button" onClick={() => (
            setNewProduct(true)
        )}>Tambah</button>
        <label>
          Cari:
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </label>
        <section>
          Harga:
          <label>
            Minimal:
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </label>
          <label>
            Maksimal:
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value || Infinity)}
            />
          </label>
        </section>
        <section>
          Urutkan:
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="id">Normal</option>
            <option value="name">Nama</option>
            <option value="price">Harga</option>
            <option value="category">Kategory</option>
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Naik</option>
            <option value="desc">Turun</option>
          </select>
        </section>
        <Button nama={"(" + idSquence + ")" + "Keranjang"} onClick={() => (
            setNewProduct(true)
        )}/>
      </header>
      <main>
        {filteredSortedProducts.length > 0
          ? filteredSortedProducts
              .filter((_product, i) => i >= 4 * page - 4 && i < 4 * page)
              .map((product) => (
                <Product
                  key={product.id}
                  {...product}
                  setEditedProduct={setEditedProduct}
                />
              ))
          : "Tidak ada produk ditemukan."}
      </main>
      <footer>
        <label>
            Produk Per Halaman
            <input type="number" />
        </label>

        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Sebelumnya
        </Button>
        {filteredSortedProducts
          .filter((_product, i) => i % 4 === 0)
          .map((_product, i) => (
            <button
              key={i}
              className="page-number"
              onClick={() => setPage(i + 1)}
              disabled={i + 1 === page}
            >
              {i + 1}
            </button>
          ))}
        <Button
          onClick={() => setPage(page + 1)}
          disabled={page === Math.ceil(filteredSortedProducts.length / 4)}
        >
          Berikutnya
        </Button>
      </footer>
      <div>
        {newProduct && (
            <form className="card dialog">
                <h1>Tambah Product</h1>
                <label>
                    Nama
                    <input type="text" />
                </label>
                <label>
                    Harga
                    <input type="number" />
                </label>
                <label>
                    Gambar
                    <input type="url" />
                </label>
                <label>
                    Kategori
                    <select name="" id="">
                        <option value="Laptop">Laptop</option>
                        <option value="Smartphone">Smaprtphone</option>
                        <option value="Headset">Headset</option>
                        <option value="Watch">Watch</option>
                    </select>
                </label>
                <div>
                    <Button nama={"Batal"} onClick={(e)=> (
                        setNewProduct(false)
                    )}/>
                    <Button nama={"Simpan"} />
                </div>
            </form>
        )}
      </div>
      <div>
        {editedProduct && (
        <form
          className="dialog"
          onSubmit={(e) => {
            e.preventDefault();
            setProducts(
              products.map((product) =>
                product.id === editedProduct.id ? editedProduct : product
              )
            );
            setEditedProduct(undefined);
          }}
        >
          <h1>Edit Produk</h1>
          <label>
            Nama
            <input
              type="text"
              value={editedProduct.name}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, name: e.target.value })
              }
              autoFocus
            />
          </label>
          <label>
            Harga
            <input
              type="number"
              value={editedProduct.price}
              onChange={(e) =>
                setEditedProduct({
                  ...editedProduct,
                  price: parseInt(e.target.value),
                })
              }
            />
          </label>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              type="reset"
              variant="tonal"
              onClick={() => setEditedProduct(undefined)}
            >
              Batal
            </Button>
            <Button>Simpan</Button>
          </div>
        </form>
      )}
      </div>
    </div>
  );
}
