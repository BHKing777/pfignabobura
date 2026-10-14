import React from 'react'
import axios from 'axios'
import Link from 'next/link'

const Home = async () => {
  const { data: products } = await axios.get(
    'https://fakestoreapi.com/products'
  )

  const categories = [...new Set(products.map((el) => el.category))]

  return (
    <>
      <header className="header">
        <Link href="/" className="logo">
          Pfig Na Bobura<span>.</span>
        </Link>

        <nav className="nav">
          <Link href="/">Home</Link>
          <a href="#products">Products</a>
          <a href="#about">About</a>
        </nav>

        <Link href="/ojgd" className="cart">
          Explore
        </Link>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="hero-label">WELCOME TO OUR STORE</span>
            <h1>
              Find Your
              <br />
              <span>Perfect Style.</span>
            </h1>
            <p>
              Discover amazing products, explore new styles
              and find everything you need in one place.
            </p>
            <a href="#products" className="hero-btn">
              Shop Now →
            </a>
          </div>

          <div className="hero-image">
            <img src={products[0].image} alt="Featured product" />
            <div className="floating-card">
              <span>Featured Product</span>
              <strong>${products[0].price}</strong>
            </div>
          </div>
        </section>

        <section className="categories">
          <div className="section-heading">
            <div>
              <span className="small-label">EXPLORE MORE</span>
              <h2>Our Categories</h2>
            </div>
          </div>

          <div className="category-list">
            {categories.map((category) => (
              <a
                href="#products"
                className="category-item"
                key={category}
              >
                {category}
                <span>↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="products-section" id="products">
          <div className="section-heading">
            <div>
              <span className="small-label">OUR COLLECTION</span>
              <h2>Popular Products</h2>
            </div>
            <p>Find your next favorite product.</p>
          </div>

          <div className="wrap">
            {products.map((el) => (
              <div className="card" key={el.id}>
                <div className="product-image">
                  <img src={el.image} alt={el.title} />
                  <span className="product-badge">#{el.id}</span>
                </div>

                <p className="product-category">{el.category}</p>
                <h3>{el.title}</h3>

                <div className="rating">
                  <span>★</span> {el.rating.rate}
                  <span className="reviews">
                    ({el.rating.count} reviews)
                  </span>
                </div>

                <div className="product-bottom">
                  <h2>${el.price.toFixed(2)}</h2>
                  <Link
                    href={`/product/${el.id}`}
                    className="product-btn"
                  >
                    View →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <span className="small-label">WHY CHOOSE US</span>
          <h2>Shopping made simple.</h2>
          <p>
            Pfig Na Bobura brings together a variety of products
            to make your shopping experience easy and enjoyable.
          </p>

          <div className="about-features">
            <div>
              <strong>01</strong>
              <h3>Quality Products</h3>
              <p>Explore a wide range of products.</p>
            </div>
            <div>
              <strong>02</strong>
              <h3>Easy Shopping</h3>
              <p>Find your favorites in just a few clicks.</p>
            </div>
            <div>
              <strong>03</strong>
              <h3>Great Experience</h3>
              <p>A simple and convenient catalog.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <Link href="/" className="logo">
          Pfig Na Bobura<span>.</span>
        </Link>
        <p>© 2026 Pfig Na Bobura. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Home