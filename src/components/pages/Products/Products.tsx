import * as React from "react";
import { useState } from "react";
import { AuthService } from "../../../libs/Auth/AuthService";
import { ProductService } from "../../../libs/Services/ProductService";
import { SupermarketService } from "../../../libs/Services/SupermarketService";
import { UserService } from "../../../libs/Services/UserService";
import "./Products.scss"

const Products: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("user") ?? "{}");
  const [productsList, setProductsList] = useState<
    Array<{ name: string; category: string; price: number }>
  >([]);
  const username = user.username;

  const authService = new AuthService();
  const testrequest = (event: React.FormEvent) => {
    event.preventDefault();

    ProductService.getAllProducts().then((response: any) => {
      const products = response.data;
      setProductsList(products);
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    authService.logout();
  };

  return (
    <div className="header">
      Hello, {username}!WELCOMEEE HEREdd
      <button onClick={handleSubmit}>Logout</button>
      <button onClick={testrequest}>Afisare Produse</button>
      <div className="container">
      {productsList.map((product) => (
        <div key={product.name}>
          <p>Name: {product.name}</p>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Products;
