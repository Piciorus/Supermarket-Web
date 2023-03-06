import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { AuthService } from "../../../libs/Auth/AuthService";
import { Product } from "../../../libs/Model/Product";
import { ProductService } from "../../../libs/Services/ProductService";
import { SupermarketService } from "../../../libs/Services/SupermarketService";
import { UserService } from "../../../libs/Services/UserService";
import "./Products.scss";

const Products: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("user") ?? "{}");
  const [productsList, setProductsList] = useState<
    Array<{ id: string; name: string; category: string; price: number }>
  >([]);

  const username = user.username;
  const getAllProducts = (event: React.FormEvent) => {
    if (event) {
      event.preventDefault();
    }
    ProductService.getAllProducts().then((response: any) => {
      const products = response.data;
      setProductsList(products);
    });
  };
  const authService = new AuthService();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    authService.logout();
  };
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [expirationDate, setExpirationDate] = useState("");
  const [brand, setBrand] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const expirationDateRef = useRef<HTMLInputElement>(null);
  const brandRef = useRef<HTMLInputElement>(null);

  const addProduct = (event: React.FormEvent) => {
    event.preventDefault();
    const product = new Product();
    product.name = name;
    product.category = category;
    product.price = price;
    product.expirationDate = expirationDate;
    product.brand = brand;
    product.name = nameRef.current!.value;
    product.category = categoryRef.current!.value;
    product.price = priceRef.current!.value;
    product.expirationDate = expirationDateRef.current!.value;
    product.brand = brandRef.current!.value;
    ProductService.addProduct(product).then((response: any) => {
      console.log(response);
      getAllProducts(event);
    });
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseInt(event.target.value);
    setPrice(newPrice);
  };

  const handleExpirationDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setExpirationDate(event.target.value);
  };

  const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBrand(event.target.value);
  };

  return (
    <>
      <div className="header-container">
        <div className="header">
          Hello, {username}!<button onClick={handleSubmit}>Logout</button>
          <button onClick={getAllProducts}>Afisare Produse</button>
        </div>
        <br></br>
        <button
          onClick={(event: React.FormEvent) =>
            ProductService.filterByPriceAscending().then((response: any) => {
              setProductsList(response.data);
              {
                productsList.map((product) => (
                  <tr key={product.name}>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>
                      <button
                        onClick={(event: React.FormEvent) =>
                          ProductService.deleteProductFromSupermarket(
                            product.id
                          ).then(() => {
                            getAllProducts(event);
                          })
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ));
              }
            })
          }
        >
          FilterAscending
        </button>
        <button
          onClick={(event: React.FormEvent) =>
            ProductService.filterByPriceDescending().then((response: any) => {
              setProductsList(response.data);
              {
                productsList.map((product) => (
                  <tr key={product.name}>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>
                      <button
                        onClick={(event: React.FormEvent) =>
                          ProductService.deleteProductFromSupermarket(
                            product.id
                          ).then(() => {
                            getAllProducts(event);
                          })
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ));
              }
            })
          }
        >
          FilterDescending
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productsList.map((product) => (
              <tr key={product.name}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    onClick={(event: React.FormEvent) =>
                      ProductService.deleteProductFromSupermarket(
                        product.id
                      ).then(() => {
                        getAllProducts(event);
                      })
                    }
                  >
                    Delete
                  </button>
                  <button>Update Price</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br></br>
        <br></br>
        <form className="form" onSubmit={addProduct}>
          <div>
            <input
              ref={nameRef}
              type="text"
              placeholder="name"
              className="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="second-input">
            <input
              ref={brandRef}
              type="text"
              placeholder="brand"
              className="name"
              value={brand}
              onChange={handleBrandChange}
            />
          </div>
          <div className="second-input">
            <input
              ref={categoryRef}
              type="text"
              placeholder="category"
              className="name"
              value={category}
              onChange={handleCategoryChange}
            />
          </div>
          <br></br>
          <div className="third-input">
            <input
              ref={priceRef}
              type="number"
              placeholder="price"
              className="name"
              value={price}
              onChange={handlePriceChange}
            />
          </div>
          <br></br>

          <div className="fourth-input">
            <input
              ref={expirationDateRef}
              type="text"
              placeholder="expiration date"
              className="name"
              value={expirationDate}
              onChange={handleExpirationDateChange}
            />
          </div>
          <button className="button" onClick={addProduct}>
            add product
          </button>
        </form>
      </div>
    </>
  );
};

export default Products;
