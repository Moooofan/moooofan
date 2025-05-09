import React from 'react';

const blogPosts = [
  {
    title: 'London Relocation: Taipei vs London',
    description: '在過去十年，我有大約七年的時間住在台北、一年半的時間住在倫敦，這二個城市對我來說都已經算是...',
    date: '30 Apr 2025',
    read: '7 min read',
    image: '/cover.jpg',
    link: '#',
  },
  {
    title: 'The Risk of Vertical AI',
    description: '前陣子 YC 不斷在拍影片鼓勵創業者在選擇題目時多考慮做 Vertical AI，並分享了許多 Vertical AI 公司...',
    date: '11 Mar 2025',
    read: '4 min read',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
    link: '#',
  },
  {
    title: '建議',
    description: '會選擇向我而不是其他人尋求建議的人，某種程度上，或許早已對自己的選擇有了答案。',
    date: '27 Feb 2025',
    read: '2 min read',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    link: '#',
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-7xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
            <img src={post.image} alt={post.title} className="h-56 w-full object-cover" />
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-zinc-600 mb-4 flex-1">{post.description}</p>
              <div className="flex items-center text-zinc-400 text-sm">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.read}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 