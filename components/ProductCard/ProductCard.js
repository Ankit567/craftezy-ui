import Image from "next/image";
import ReactStars from "react-rating-stars-component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
import Link from "next/link";

import usePrice from "../../lib/use-price";

const ProductCard = ({ product }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    nextArrow: (
      <div>
        <img className="bg-[#7D7D7D] z-10" src="/images/chevron-right-slider.png" />
      </div>
    ),
    prevArrow: (
      <div>
        <img className="bg-[#7D7D7D] z-10 tra" src="/images/chevron-left-slider.png" />
      </div>
    ),
  };

  const { price, basePrice } = usePrice({
    amount: product?.sale_price ? product?.sale_price : 0,
    baseAmount: product?.price,
  });

  const { price: minPrice } = usePrice({
    amount: product.min_price ?? 0,
  });

  const { price: maxPrice } = usePrice({
    amount: product.max_price ?? 0,
  });

  return (
    <Link href="/products/handmade-wooden-striped-black-stool">
      <a className="block">
        <div className="bg-lotion">
          <SlickSlider {...settings}>
            <div className="text-center">
              <Image
                alt={product.name || "Product Image"}
                width={340}
                height={440}
                src={product.image?.original ?? "/images/product-placeholder.svg"}
              />
            </div>
            {product?.gallery.map((image) => (
              <div className="text-center">
                <Image
                  alt={product.name || "Product Image"}
                  width={340}
                  height={440}
                  src={image?.original ?? "/images/product-placeholder.svg"}
                />
              </div>
            ))}
          </SlickSlider>
        </div>
        <h4 className="text-xs my-2 text-[#B1B1B1] uppercase leading-[18px]">Wooden handricrafts</h4>
        <h3 className="font-medium text-base leading-[24px] text-[#262626] mb-2">{product.name}</h3>
        <div>
          <p className="text-[14px] font-semibold	line150 text-price mb-2">
            MRSP &nbsp;
            {product.product_type.toLocaleLowerCase() === "variable" ? (
              <>
                <span className="inline-block">{minPrice}</span>
                <span> - </span>
                <span className="inline-block">{maxPrice}</span>
              </>
            ) : (
              <>
                <span className="inline-block">{price}</span>
                &nbsp;
                {basePrice && <del className="font-medium	ml-2 text-[11px] line150 text-[#B9B6B6]">{basePrice}</del>}
              </>
            )}
          </p>
        </div>
        <a href="/" className="text-[#c35656] text-xs line150 mb-5 hover:underline">
          Explore more by this seller
        </a>
        <div className="flex items-center">
          <ReactStars value={4.77} count={5} onChange={() => {}} size={11} activeColor="#FB8200" />
          <p className="text-sm text-[#5E6366] tracking-[0.1px] leading-[22px] ml-2 font-roboto">4.0</p>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
