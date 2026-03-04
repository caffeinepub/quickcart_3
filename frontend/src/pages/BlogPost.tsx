import React from 'react';
import { Link, useParams } from '@tanstack/react-router';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from './Blog';

const POST_CONTENT: Record<string, string> = {
  '1': `Superfoods are nutrient powerhouses that pack large doses of antioxidants, polyphenols, vitamins, and minerals. Eating them may reduce the risk of chronic disease and prolong life.

1. Blueberries — Rich in antioxidants, particularly anthocyanins, which may protect against aging and cancer.

2. Kale — One of the most nutrient-dense foods on the planet, loaded with vitamins A, K, C, and B6.

3. Salmon — Loaded with omega-3 fatty acids, which have been shown to reduce inflammation and lower blood pressure.

4. Quinoa — A complete protein containing all nine essential amino acids. Also high in fiber and minerals.

5. Avocado — Loaded with heart-healthy monounsaturated fatty acids and potassium.

6. Sweet Potatoes — High in beta-carotene, which converts to vitamin A in the body.

7. Chia Seeds — Tiny but mighty, packed with fiber, protein, omega-3s, and various micronutrients.

8. Turmeric — Contains curcumin, a substance with powerful anti-inflammatory and antioxidant properties.

9. Spinach — Extremely nutrient-rich, loaded with vitamins, minerals, and antioxidants.

10. Walnuts — High in omega-3 fatty acids and antioxidants, great for brain health.

Start incorporating these foods gradually into your daily diet for maximum benefit!`,
  '2': `Busy weeknights call for quick, nutritious meals. Here are our favorite 15-minute dinner recipes:

1. Stir-Fried Vegetables with Tofu
Heat oil in a wok, add garlic, toss in your favorite vegetables and cubed tofu. Season with soy sauce and sesame oil. Serve over rice.

2. Pasta Primavera
Cook pasta, sauté seasonal vegetables in olive oil with garlic, toss together with parmesan. Done in 12 minutes!

3. Egg Fried Rice
Use leftover rice, scramble eggs, add vegetables and soy sauce. A complete meal in under 10 minutes.

4. Chickpea Curry
Sauté onions, add canned chickpeas, tomatoes, and curry powder. Simmer for 10 minutes. Serve with naan.

5. Avocado Toast with Poached Eggs
Toast bread, mash avocado with lemon and salt, top with poached eggs and chili flakes.

These recipes prove that healthy eating doesn't require hours in the kitchen!`,
};

export default function BlogPost() {
  const { postId } = useParams({ from: '/blog/$postId' });
  const post = BLOG_POSTS.find(p => p.id === postId);
  const related = BLOG_POSTS.filter(p => p.id !== postId).slice(0, 3);

  if (!post) {
    return (
      <div className="section-pad text-center">
        <div className="text-6xl mb-4">😕</div>
        <h2 className="text-2xl font-bold mb-4">Post not found</h2>
        <Link to="/blog" className="btn-primary inline-flex">Back to Blog</Link>
      </div>
    );
  }

  const content = POST_CONTENT[postId] || `${post.excerpt}\n\nThis is a detailed article about ${post.title.toLowerCase()}. Our expert nutritionists and chefs have put together comprehensive information to help you make the most of your grocery shopping and cooking experience.\n\nStay tuned for more detailed content coming soon!`;

  return (
    <div>
      <div className="page-banner">
        <div className="container-fc">
          <nav className="text-xs mb-3" style={{ color: 'oklch(0.55 0.04 145)' }}>
            <Link to="/" className="hover:underline green-text">Home</Link>
            {' / '}
            <Link to="/blog" className="hover:underline green-text">Blog</Link>
            {' / '}
            <span>{post.title.slice(0, 30)}...</span>
          </nav>
        </div>
      </div>

      <section className="section-pad">
        <div className="container-fc max-w-3xl">
          <Link to="/blog" className="flex items-center gap-2 text-sm font-medium mb-6 green-text">
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <div className="h-64 rounded-2xl flex items-center justify-center text-9xl mb-8" style={{ backgroundColor: 'oklch(0.97 0.03 145)' }}>
            {post.emoji}
          </div>

          <span className="tag-chip mb-4 inline-block">{post.category}</span>
          <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)', lineHeight: '1.3' }}>{post.title}</h1>

          <div className="flex items-center gap-4 text-sm mb-8 pb-6 border-b" style={{ color: 'oklch(0.55 0.04 145)', borderColor: 'oklch(0.93 0.03 145)' }}>
            <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime} read</span>
            <span>By FreshCart Team</span>
          </div>

          <div className="prose max-w-none" style={{ color: 'oklch(0.3 0.04 145)', lineHeight: '1.8' }}>
            {content.split('\n\n').map((para, i) => (
              <p key={i} className="mb-4 text-base">{para}</p>
            ))}
          </div>

          {/* Related Posts */}
          <div className="mt-12 pt-8 border-t" style={{ borderColor: 'oklch(0.93 0.03 145)' }}>
            <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map(p => (
                // Use plain anchor to avoid TanStack Router typed-path constraint on dynamic segments
                <a key={p.id} href={`/blog/${p.id}`} className="no-underline group">
                  <div className="rounded-xl overflow-hidden border transition-all group-hover:shadow-md" style={{ borderColor: 'oklch(0.93 0.03 145)' }}>
                    <div className="h-24 flex items-center justify-center text-4xl" style={{ backgroundColor: 'oklch(0.97 0.03 145)' }}>{p.emoji}</div>
                    <div className="p-3">
                      <p className="text-xs font-semibold line-clamp-2" style={{ color: 'oklch(0.22 0.04 145)', fontFamily: 'Poppins, sans-serif' }}>{p.title}</p>
                      <p className="text-xs mt-1 flex items-center gap-1 green-text font-medium">Read more <ArrowRight size={10} /></p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
