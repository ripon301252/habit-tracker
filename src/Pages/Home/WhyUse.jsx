import React from "react";

const WhyUse = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">

      {/* Section 1 */}
      <div className="grid md:grid-cols-2 gap-6 shadow-md rounded-2xl p-6 md:p-8 border border-gray-500">

        {/* English */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">
            Why Use Habit Tracker?
          </h2>

          <p className="leading-relaxed">
            Habit Tracker helps you build and maintain good habits by providing a visual representation of your progress.
            It allows you to set goals, track your daily habits, and stay motivated to achieve your objectives.
          </p>

          <p className=" leading-relaxed">
            You can easily identify patterns in your behavior, celebrate your successes, and improve over time.
          </p>
        </div>

        {/* Bangla */}
        <div className="space-y-3 border-t md:border-t-0 md:border-l md:pl-6 pt-6 md:pt-0">
          <h2 className="text-2xl font-bold">
            কেন Habit Tracker ব্যবহার করবেন?
          </h2>

          <p className="leading-relaxed">
            Habit Tracker আপনাকে ভালো অভ্যাস তৈরি করতে এবং তা ধরে রাখতে সাহায্য করে।
            এটি আপনার অগ্রগতি ভিজ্যুয়ালি দেখায় যাতে আপনি সহজেই উন্নতি বুঝতে পারেন।
          </p>

          <p className="leading-relaxed">
            আপনি নিজের আচরণের প্যাটার্ন বুঝতে পারবেন এবং ধীরে ধীরে উন্নতি করতে পারবেন।
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid md:grid-cols-2 gap-6 shadow-md rounded-2xl p-6 md:p-8 border border-gray-500">

        {/* English */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Benefits of Using Habit Tracker
          </h2>

          <ul className="space-y-2 ">
            <li>✔ Visualize your progress and stay motivated.</li>
            <li>✔ Set clear goals and track daily habits.</li>
            <li>✔ Identify behavior patterns easily.</li>
            <li>✔ Celebrate small wins and stay accountable.</li>
          </ul>
        </div>

        {/* Bangla */}
        <div className="border-t md:border-t-0 md:border-l md:pl-6 pt-6 md:pt-0">
          <h2 className="text-2xl font-bold mb-4">
            Habit Tracker ব্যবহারের সুবিধা
          </h2>

          <ul className="space-y-2">
            <li>✔ আপনার অগ্রগতি সহজে দেখা যায় এবং মোটিভেশন বাড়ে।</li>
            <li>✔ পরিষ্কার লক্ষ্য সেট করে ট্র্যাক করা যায়।</li>
            <li>✔ নিজের আচরণের প্যাটার্ন বুঝা যায়।</li>
            <li>✔ ছোট সাফল্য উদযাপন করা যায়।</li>
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div className="grid md:grid-cols-2 gap-6 border border-gray-500 rounded-2xl p-6 md:p-8 shadow-lg">

        {/* English */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-3">Get Started Today!</h2>
          <p className="opacity-90">
            Start building better habits today with Habit Tracker and improve your life step by step.
          </p>
        </div>

        {/* Bangla */}
        <div className="text-center md:text-left border-t md:border-t-0 md:border-l md:pl-6 pt-6 md:pt-0">
          <h2 className="text-2xl font-bold mb-3">আজই শুরু করুন!</h2>
          <p className="opacity-90">
            Habit Tracker ব্যবহার করে আজই ভালো অভ্যাস গড়ে তুলুন এবং জীবনকে উন্নত করুন।
          </p>
        </div>

      </div>

    </div>
  );
};

export default WhyUse;