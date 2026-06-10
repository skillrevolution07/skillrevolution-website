import { useNavigate } from "react-router-dom";

export default function CourseCard({ title, description, slug }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/courses#${slug}`)}
      className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition cursor-pointer"
    >
      <h3 className="text-3xl font-bold text-slate-800 mb-4">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}