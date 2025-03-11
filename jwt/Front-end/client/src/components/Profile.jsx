import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });
  const [loading, setLoading] = useState(true); // لتحديد حالة التحميل
  const [error, setError] = useState(null); // لإظهار الأخطاء إذا حدثت

  useEffect(() => {
    // جلب البيانات من السيرفر بعد التوثيق
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/users/profile",
          {
            withCredentials: true, // التأكد من إرسال الكوكيز مع الطلب
          }
        );
        setUserData(response.data); // تعيين بيانات المستخدم
      } catch (err) {
        setError("Failed to fetch user data.");
        console.error(err);
      } finally {
        setLoading(false); // بعد تحميل البيانات أو حدوث خطأ
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-600 text-lg">Loading...</div>
      </div>
    ); // عرض مؤشر التحميل
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto my-10 p-6 bg-red-50 rounded-lg text-center">
        <p className="text-red-600">{error}</p>
      </div>
    ); // عرض الخطأ إذا حدث
  }

  return (
    <div className="max-w-md mx-auto my-10 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Profile
      </h2>

      <div className="space-y-6">
        <div className="border-b pb-4">
          <label className="block text-sm font-medium text-gray-500 mb-1">
            Name:
          </label>
          <p className="text-lg font-medium text-gray-800">{userData.name}</p>
        </div>

        <div className="border-b pb-4">
          <label className="block text-sm font-medium text-gray-500 mb-1">
            Email:
          </label>
          <p className="text-lg font-medium text-gray-800">{userData.email}</p>
        </div>

        <div className="pt-4 flex justify-center">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
