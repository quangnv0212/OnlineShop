import { Product as ProductType } from "@/types/product.type";
import { formatCurrency, formatNumberToSocialStyle } from "@/utils/utils";
import Link from "next/link";
import ProductRating from "../ProductRating";
import Image from "next/image";

interface Props {
  product: ProductType;
}

export default function Product({ product }: Props) {
  return (
    <Link href={{ pathname: `/products/${product._id}` }}>
      <div className="overflow-hidden rounded-sm bg-white shadow transition-transform duration-100 hover:translate-y-[-0.04rem] hover:shadow-md">
        <div className="relative w-full pt-[100%]">
          <Image
            width={50}
            height={50}
            src={product.image}
            alt={product.name}
            className="absolute top-0 left-0 object-cover w-full h-full bg-white"
          />
        </div>
        <div className="p-2 overflow-hidden">
          <div className="min-h-[2rem] text-xs line-clamp-2">
            {product.name}
          </div>
          <div className="flex items-center mt-3">
            <div className="max-w-[50%] truncate text-gray-500 line-through">
              <span className="text-xs">₫</span>
              <span className="text-sm">
                {formatCurrency(product.price_before_discount)}
              </span>
            </div>
            <div className="ml-1 truncate text-orange">
              <span className="text-xs">₫</span>
              <span className="text-sm">{formatCurrency(product.price)}</span>
            </div>
          </div>
          <div className="flex items-center justify-end mt-3">
            <ProductRating rating={product.rating} />
            <div className="ml-2 text-sm">
              <span>{formatNumberToSocialStyle(product.sold)}</span>
              <span className="ml-1">Đã bán</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
