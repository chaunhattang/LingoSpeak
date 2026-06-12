import { useRef } from "react";
import logo from "../../assets/images/logo.png";
import { getUser, setUser } from "../../utils/auth";
import { updateProfile } from "../../api/auth";
import { API_BASE_URL } from "../../api/client";
import { toast } from "sonner";

const ProfileSidebar = () => {
  const user = getUser();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const avatarSrc = user?.image
    ? `${API_BASE_URL}/uploads/images/${user.image}`
    : logo;

  const handleChooseImage = () => fileInputRef.current?.click();

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    try {
      const updatedUser = await updateProfile(user.id, { image: file });
      setUser(updatedUser);
      toast.success("Cập nhật ảnh đại diện thành công");
      setTimeout(() => window.location.reload(), 1500);
    } catch {
      toast.error("Không thể cập nhật ảnh đại diện");
    }
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
            style={{ backgroundImage: `url(${avatarSrc})` }}
          />
          <button
            onClick={handleChooseImage}
            className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow"
          >
            📷
          </button>
        </div>

        <h3 className="text-xl font-bold dark:text-white">
          {user?.fullName ?? user?.email}
        </h3>

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
