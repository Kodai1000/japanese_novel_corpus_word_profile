import Link from 'next/link';
type WordDatum = {
    average_distance: number
    dep: string
    genre: string
    head_reading: string
    head_word_pos: string
    id: number
    identifier: string
    logDice: number
    target_reading: string
    target_word_pos: string
    head_word: string
    target_word: string
    count: number
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const data = await fetch(`https://novel-corpus-api-1.onrender.com/co_occurrence/%E5%A4%8F%E7%9B%AE%E6%BC%B1%E7%9F%B3/all/${slug}/0`);
  const data_json = await data.json()
  data_json.sort((a:WordDatum,b:WordDatum) => b.count - a.count)
  return (
    <div>
        <h1>単語: {decodedSlug}</h1>
        <Link href="/" className="text-blue-600 underline hover:text-blue-800">ホームへ戻る</Link>
        <table className="table-auto">
            <thead>
                <tr className="bg-gray-200">
                    <th className="border px-4">係り受け元</th>
                    <th className="border px-4">係り受け先</th>
                    <th className="border px-4">頻度</th>
                </tr>
            </thead>

            <tbody>
                {data_json.map((datum: WordDatum) => (
                <tr key={datum.id}>
                    <td className="border px-4">{datum.head_word}</td>
                    <td className="border px-4">{datum.target_word}</td>
                    <td className="border px-4">{datum.count}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}