import Link from "next/link";

type relative_word_data = [
    name: string,
    distance: number
]

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const {slug} = await params;
    const decodedSlug = decodeURI(slug);
    const data = await fetch(`https://novel-corpus-api-1.onrender.com/get_relative_words/夏目漱石/${slug}`)
    const data_json = await data.json()
    return(
        <>
            <h1 className="text-2xl">検索結果 : {decodedSlug}</h1>
            <></>
            {data_json.map((datum: relative_word_data) => (
                <Link href = {`/word_profile/${datum[0]}`}
                key={datum[0]}
                className="text-blue-600 underline hover:text-blue-800">
                    <div>{datum[0]}</div>
                </Link>
            ))}
        </>
    )
}