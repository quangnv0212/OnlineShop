import omitBy from "lodash/omitBy";
import isUndefined from "lodash/isUndefined";
import { ProductListConfig } from "@/types/product.type";
import { useRouter } from "next/router";

export type QueryConfig = {
  [key in keyof ProductListConfig]: string;
};

export default function useQueryConfig() {
  const { query } = useRouter();
  const queryParams: QueryConfig = query;
  const queryConfig: QueryConfig = omitBy(
    {
      page: queryParams.page || "1",
      limit: queryParams.limit || "10",
      sort_by: queryParams.sort_by,
      exclude: queryParams.exclude,
      name: queryParams.name,
      order: queryParams.order,
      price_max: queryParams.price_max,
      price_min: queryParams.price_min,
      rating_filter: queryParams.rating_filter,
      category: queryParams.category,
    },
    isUndefined
  );
  return queryConfig;
}
