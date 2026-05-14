import { useRef } from "react";
import logo from "../../assets/images/logo.png";
const ProfileSidebar = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}") as {
    fullName?: string;
    email?: string;
    avatar?: string;
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChooseImage = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      const updatedUser = {
        ...user,
        avatar: reader.result,
      };

      localStorage.setItem("user", JSON.stringify(updatedUser));

      window.location.reload();
    };

    reader.readAsDataURL(file);
  };
  return (
    <>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        hidden
      />
      <div className="bg-white dark:bg-[#1a2632] rounded-xl shadow-sm border border-[#e7edf3] dark:border-[#2a3441] p-6 flex flex-col items-center text-center">
        <div className="relative mb-4">
          <div
            className="size-32 rounded-full bg-cover bg-center border-4 border-[#f0f4f8]"
            style={{
              backgroundImage: `url(${user.avatar || logo})`,
            }}
          />

          <button
            onClick={handleChooseImage}
            className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow"
          >
            📷
          </button>
        </div>

        <h3 className="text-xl font-bold dark:text-white">{user.fullName}</h3>

        <p className="text-sm text-gray-500 mb-6">Học viên tích cực</p>

        <button
          onClick={handleChooseImage}
          className="
    w-full h-10 rounded-xl text-white font-bold
    bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500
    shadow-xl shadow-blue-300/40
    hover:scale-105 transition
  "
        >
          Đổi ảnh đại diện
        </button>
      </div>
    </>
  );
};

export default ProfileSidebar;
