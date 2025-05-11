'use client';
import { useTheme } from "./ToggleEffect";

const Testimonials = () => {
  const { isDark } = useTheme();

  return (
    <section
      className={`py-20 px-4 text-center ${
        isDark ? 'bg-gray-900' : 'bg-gray-100'
      } text-black`}
    >
      <h1 className={`text-4xl mb-8 font-bold ${isDark ? 'text-white' : 'text-black'}`}>Customer Testimonial</h1>
      <div className="flex justify-center flex-wrap gap-6">
        {/* Testimonial 1 */}
        <div className="p-6 bg-white rounded-xl shadow-md max-w-xs text-black">
          <p className="italic mb-4">Selling my software licenses was quick and easy. Highly recommend!</p>
          <p className="font-bold">John Doe</p>
          <p className="text-gray-500">CEO, SoftTech</p>
        </div>

        {/* Testimonial 2 */}
        <div className="p-6 bg-white rounded-xl shadow-md max-w-xs text-black">
          <p className="italic mb-4">The process was seamless, and I received my payment within hours!</p>
          <p className="font-bold">Jane Smith</p>
          <p className="text-gray-500">Founder, CodeMasters</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
