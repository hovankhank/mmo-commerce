'use client'

import { Textarea, Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import Footers from "@/components/Footers";
const Support = async () => {
  return (
      <div className=" bg-opacity-75 flex items-center justify-center">
        <div className=" p-24 w-full flex relative pt-">
          <div className="w-3/5 bg-gray-800 text-white p-6 rounded-l-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Liên hệ với chúng tôi</h2>
            <div className="mb-4">Say something to start a live chat!</div>
            <div className="flex items-center mb-3">
              <div>Zalo: 0922233666</div>
            </div>
            <div className="flex items-center mb-3">
              <div>support@firelogin.com</div>
            </div>
            <div className="flex items-center mb-3">
              <div>123 Nguyễn Sĩ Sách, Thành Phố Vinh, Nghệ An</div>
            </div>
            <div className="flex items-center space-x-4 mt-6 ps-32">
            </div>
          </div>
          <div className="w-2/5 p-6 bg-white">
            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label className="block text-gray-700">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  className="w-full mt-2 p-2 border rounded-md"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@gmail.com"
                  className="w-full mt-2 p-2 border rounded-md"
                />
              </div>
            </div>
            <div className="mb-4">

              <select id="help" className="w-full mt-2 p-2 border rounded-md">
                <option>I want to buy</option>
              </select>
            </div>
            <div className="mb-4">
              <Textarea
                isInvalid={true}
                variant="bordered"
                label="Description"
                placeholder="Enter your description"
                defaultValue="..."
                errorMessage="The description should be at least 255 characters long."
                className="max-w-xs"
              />
            </div>
            <div className="text-right">
              <Button className="bg-gray-800 text-white">
                Gửi
              </Button>
            </div>
          </div>
          <button
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
          </button>
        </div>
      </div>
  );
}
export default Support;