"use client";

import { useRouter } from 'next/navigation'

export default function Home() {

    const router = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const word = formData.get('word');
        router.push(`/word_search/${word}`);
    }

    return (
    <div className="flex flex-col items-center px-4 py-8 space-y-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl flex gap-2"
      >
        <input
          name="word"
          placeholder="調べたい単語を入力"
          className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="border rounded px-4 py-2 bg-gray-300 hover:bg-gray-800 hover:text-white transition"
        >
          検索
        </button>
      </form>

      <div className="w-full max-w-xl border rounded p-6 space-y-2">
        <h1 className="text-xl font-semibold">使い方・見方</h1>
        <p>1. 調べたい単語を入力します。</p>
        <p>2. 検索結果からデータを閲覧したい単語をクリックします。</p>
        <p>3. クリックすると、係り受け元の語・係り受け先の語・そしてその頻度が降順に表示されます。</p>
      </div>

      <div className="w-full max-w-xl border rounded p-6 space-y-2">
        <h1 className="text-xl font-semibold">データの処理について</h1>
        <p>
          グロービス株式会社による青空文庫コーパスから取得したデータを、
          ja_ginzaを用いて形態素解析及び係り受け解析を実施したものについて、
          係り受け関係のある語を収集し、その頻度を集計しました。
        </p>
        <p>一部誤認識が行われている可能性があります。</p>
      </div>
    </div>
    );
}
