import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { DOCTOR_INFO } from '../utils/appointment';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      id: 1,
      author: 'Asad B.',
      role: 'Verified Patient',
      rating: 5,
      text: 'Professional, kind and attentive. He explained everything clearly and I felt in good hands.',
      highlight: 'Attentive & Reassuring',
    },
    {
      id: 2,
      author: 'Noor A.',
      role: 'Verified Patient',
      rating: 5,
      text: 'Highly intelligent and caring, not commercial. He gives enough time and studies each case carefully.',
      highlight: 'Ethical & Thorough',
    },
    {
      id: 3,
      author: 'Dr. Aurangzeb K.',
      role: 'Physician / Patient Relative',
      rating: 5,
      text: 'Gave my family member ample time for assessment and involved us in every step of treatment.',
      highlight: 'Family-Involved Care',
    },
  ];

  return (
    <section id="reviews" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            <span>Google Patient Feedback</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            What patients say
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Summarised from Google reviews.
          </p>
        </div>

        {/* Aggregate Trust Banner */}
        <div className="mb-10 max-w-md mx-auto p-4 rounded-2xl bg-gradient-to-r from-sky-50/80 via-teal-50/50 to-amber-50/50 border border-sky-100 flex items-center justify-center gap-4 text-center">
          <div className="text-3xl font-extrabold text-slate-900 tabular-nums">
            5.0
          </div>
          <div className="text-left">
            <div className="flex items-center text-amber-400 mb-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs font-semibold text-slate-600">
              Based on {DOCTOR_INFO.reviewsCount} Google Reviews · 100% Recommended
            </p>
          </div>
        </div>

        {/* 3 Patient Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-slate-50/70 rounded-3xl p-6 sm:p-7 border border-slate-100 flex flex-col justify-between hover:bg-white hover:shadow-md hover:border-sky-100 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-100">
                    {review.highlight}
                  </span>
                </div>

                <div className="relative mb-5">
                  <Quote className="w-8 h-8 text-slate-200/80 absolute -top-2 -left-1 pointer-events-none" />
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed relative z-10 pl-2">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-200 to-teal-200 text-sky-900 font-bold text-xs flex items-center justify-center shrink-0">
                  {review.author.slice(0, 2)}
                </div>
                <div>
                  <b className="text-sm font-bold text-slate-900 block leading-tight">
                    {review.author}
                  </b>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500">
                    <CheckCircle className="w-3 h-3 text-teal-600" />
                    <span>{review.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
