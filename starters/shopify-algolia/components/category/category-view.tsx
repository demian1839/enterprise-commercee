import { notFound } from "next/navigation"
import { SearchParamsType } from "types"
import { getCollection } from "lib/algolia"
import { SearchView } from "components/search-view"

interface CategoryViewProps {
  params: { slug: string; page?: string }
  searchParams?: SearchParamsType
  basePath?: string
}

export async function CategoryView({ params, searchParams = {}, basePath }: CategoryViewProps) {
  const collection = await getCollection(params.slug)

  if (!collection) return notFound()

  return <SearchView searchParams={searchParams} params={params} collection={collection} basePath={basePath} />
}
