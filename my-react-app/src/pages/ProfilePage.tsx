import AccountHeader from "../components/account/AccountHeader";
import ProfileSidebar from "../components/account/ProfileSidebar";
import PersonalInfoForm from "../components/account/PersonalInfoForm";
import ChangePasswordForm from "../components/account/ChangePasswordForm";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-900">
      <AccountHeader />

      <main className="flex flex-col items-center py-10 px-4 md:px-10 lg:px-40">
        <div className="w-full max-w-[960px] flex flex-col gap-8">
          <div>
            <h1 className="text-4xl font-black tracking-[-0.033em] text-slate-900 dark:text-white">
              Hồ sơ của bạn
            </h1>

            <p className="text-slate-500 dark:text-slate-400 mt-2">
              Quản lý thông tin cá nhân và bảo mật tài khoản
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <ProfileSidebar />
            </div>

            <div className="lg:col-span-8 flex flex-col gap-8">
              <PersonalInfoForm />
              <ChangePasswordForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
