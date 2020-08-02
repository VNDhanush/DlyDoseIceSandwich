import React, { Component } from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';

const images = [
  '/images/gallery1.jpeg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg',
  '/images/gallery4.jpeg',
  '/images/gallery5.jpg',
  '/images/gallery6.jpg',
  '/images/gallery7.jpg',
  '/images/gallery8.jpg'
];

const GalleryContent = () => {
  const [photoIndex, setPhotoIndex] = React.useState(0);
  const [isOpenImage, setIsOpenImage] = React.useState(false);

  return (
    <section className="gallery-area ptb-100">
      <div className="container">
        <div className="section-title">
          <h2>User Gallery</h2>
          <div className="bar"></div>
          <p>
            <h1>Treasured Collections</h1>
          </p>
        </div>
      </div>

      <div className="row m-0">
        <div className="col-lg-3 col-md-6 p-0">
          <div className="single-image">
            <img src="/images/gallery1.jpeg" alt="gallery" />
            <Link href="#">
              <a
                className="popup-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpenImage(true);
                  setPhotoIndex(0);
                }}
              >
                <i className="icofont-plus"></i>
                <p>Thickshake</p>
              </a>
            </Link>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 p-0">
          <div className="single-image">
            <img src="/images/gallery2.jpg" alt="gallery" />

            <Link href="#">
              <a
                className="popup-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpenImage(true);
                  setPhotoIndex(1);
                }}
              >
                <i className="icofont-plus"></i>
                <p>Sandwich Icecream</p>
              </a>
            </Link>
          </div>
        </div>

        {isOpenImage && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpenImage(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
          />
        )}

        <div className="col-lg-3 col-md-6 p-0">
          <div className="single-image">
            <img src="/images/gallery3.jpg" alt="gallery" />

            <Link href="#">
              <a
                className="popup-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpenImage(true);
                  setPhotoIndex(2);
                }}
              >
                <i className="icofont-plus"></i>
                <p>Dly Store</p>

              </a>
            </Link>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 p-0">
          <div className="single-image">
            <img src="/images/gallery4.jpeg" alt="gallery" />

            <Link href="#">
              <a
                className="popup-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpenImage(true);
                  setPhotoIndex(3);
                }}
              >
                <i className="icofont-plus"></i>
                <p>Shakes</p>
              </a>
            </Link>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 p-0">
          <div className="single-image">
            <img src="/images/gallery5.jpg" alt="gallery" />

            <Link href="#">
              <a
                className="popup-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpenImage(true);
                  setPhotoIndex(4);
                }}
              >
                <i className="icofont-plus"></i>
                <p>Store</p>
              </a>
            </Link>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 p-0">
          <div className="single-image">
            <img src="/images/gallery6.jpg" alt="gallery" />

            <Link href="#">
              <a
                className="popup-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpenImage(true);
                  setPhotoIndex(5);
                }}
              >
                <i className="icofont-plus"></i>
                <p>Sandwitch</p>
              </a>
            </Link>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 p-0">
          <div className="single-image">
            <img src="/images/gallery7.jpg" alt="gallery" />

            <Link href="#">
              <a
                className="popup-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpenImage(true);
                  setPhotoIndex(6);
                }}
              >
                <i className="icofont-plus"></i>
                <p>Bubble Waffle</p>
              </a>
            </Link>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 p-0">
          <div className="single-image">
            <img src="/images/gallery8.jpg" alt="gallery" />

            <Link href="#">
              <a
                className="popup-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpenImage(true);
                  setPhotoIndex(7);
                }}
              >
                <i className="icofont-plus"></i>
                <p>Wrap</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryContent;
