"use client"
import Image from "next/image";
import profile from './Logo.png'

export default function Footers() {
  return (
    <footer className="bg-gray-800">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Image
            src={profile}
            alt="Picture of the author"
            width={100}
            height={100}
          />
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <div className="text-white">
          <h1>Liên hệ ngay nếu bạn có khó khăn khi sử dụng dịch vụ hoặc cần hợp tác.</h1>
          <h1>Chat với hỗ trợ viên</h1>
          <h1>MMO Store</h1>
          <h1>support@gmail.com</h1>
          <h1> Mon-Sat 08:00am - 10:00pm</h1>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" className="hover:underline">MMOstore™</a>. All Rights Reserved.</span>
      </div>
    </footer>
  );
}