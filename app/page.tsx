'use client'
import Image from "next/image";
import { Textarea, Button, Input, Card, CardHeader, CardBody, CardFooter, Avatar, Select, SelectItem } from "@nextui-org/react";
import { FaFacebookF } from 'react-icons/fa';

export default function Home() {
  return (
    <>

      <div>
        <div className="bg-gray-300">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="relative isolate overflow-hidden px-6 pt-16  sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
                <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
                <defs>
                  <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stop-color="#7775D6" />
                    <stop offset="1" stop-color="#E935C1" />
                  </radialGradient>
                </defs>
              </svg>
              <div className="items-center w-full">
                <div className="mx-auto max-w-2xl p-12 ">
                  <div className="items-center">
                    <div className="flex relative gap-6">
                      <Select
                        placeholder="Tùy chọn tìm kiếm"
                        labelPlacement="outside"
                        className="max-w-xs"
                      >
                        <SelectItem value="option1">
                          <div className="flex gap-2 items-center">
                            <div className="flex flex-col">
                              <span className="text-default-400">Facebook</span>
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="option2">
                          <div className="flex gap-2 items-center">
                            <div className="flex flex-col">
                              <span className="text-default-400">Tài khoản</span>
                            </div>
                          </div>
                        </SelectItem>
                      </Select>
                      <Select
                        placeholder="Tùy chọn tìm kiếm"
                        labelPlacement="outside"
                        className="max-w-xs"
                      >
                        <SelectItem value="option1">
                          <div className="flex gap-2 items-center">
                            <div className="flex flex-col">
                              <span className="text-default-400">Facebook</span>
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="option2">
                          <div className="flex gap-2 items-center">
                            <div className="flex flex-col">
                              <span className="text-default-400">Tài khoản</span>
                            </div>
                          </div>
                        </SelectItem>
                      </Select>
                    </div>
                    <div className="relative mt-8">
                      <div className="flex gap-6">
                        <Input
                          type="Search"
                          placeholder="Tìm kiếm"
                          labelPlacement="outside"
                        />
                        <Button className="bg-gray-800 text-white">Tìm kiếm</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-8 bg-gray-300 p-24">
          <div className="items-center rounded-3xl bg-gray-200 mb-12">
            <div>
              <div className="text-blue-500 text-center text-3xl p-12">
                <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 mb-12">Danh sách dịch vụ</p>
                <div className="grid grid-cols-4 gap-9">
                  <Card className="max-w-[242px] hover:bg-slate-100">
                    <div className="p-12">
                      <FaFacebookF className=" text-green-500" fill="currentColor" size={75} />
                      <div className="text-green-500 ">
                        Facebook
                      </div>
                    </div>
                  </Card>
                  <Card className="max-w-[242px] hover:bg-slate-100">
                    <div className="p-12">
                      <FaFacebookF className=" text-green-500" fill="currentColor" size={75} />
                      <div className="text-green-500 ">
                        Facebook
                      </div>
                    </div>
                  </Card>
                  <Card className="max-w-[242px] hover:bg-slate-100">
                    <div className="p-12">
                      <FaFacebookF className=" text-green-500" fill="currentColor" size={75} />
                      <div className="text-green-500 ">
                        Facebook
                      </div>
                    </div>
                  </Card>
                  <Card className="max-w-[242px] hover:bg-slate-100">
                    <div className="p-12">
                      <FaFacebookF className=" text-green-500" fill="currentColor" size={75} />
                      <div className="text-green-500 ">
                        Facebook
                      </div>
                    </div>
                  </Card>
                  <Card className="max-w-[242px] hover:bg-slate-100">
                    <div className="p-12">
                      <FaFacebookF className=" text-green-500" fill="currentColor" size={75} />
                      <div className="text-green-500 ">
                        Facebook
                      </div>
                    </div>
                  </Card>
                  <Card className="max-w-[242px] hover:bg-slate-100">
                    <div className="p-12">
                      <FaFacebookF className=" text-green-500" fill="currentColor" size={75} />
                      <div className="text-green-500 ">
                        Facebook
                      </div>
                    </div>
                  </Card>
                  <Card className="max-w-[242px] hover:bg-slate-100">
                    <div className="p-12">
                      <FaFacebookF className=" text-green-500" fill="currentColor" size={75} />
                      <div className="text-green-500 ">
                        Facebook
                      </div>
                    </div>
                  </Card>
                  <Card className="max-w-[242px] hover:bg-slate-100">
                    <div className="p-12">
                      <FaFacebookF className=" text-green-500" fill="currentColor" size={75} />
                      <div className="text-green-500 ">
                        Facebook
                      </div>
                    </div>
                  </Card>
                  {/* <Card className="max-w-[450px]">
              <CardHeader className="justify-between">
                <div className="flex gap-5">
                  <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
                  <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                    <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
                  </div>
                </div>
                <Button
                  className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                  color="primary"
                  radius="full"
                  size="sm"
                  variant={isFollowed ? "bordered" : "solid"}
                  onPress={() => setIsFollowed(!isFollowed)}
                >
                  {isFollowed ? "Unfollow" : "Follow"}
                </Button>
              </CardHeader>
              <CardBody className="px-3 py-0 text-small text-default-400">
                <p>
                  Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
                </p>
                <span className="pt-2">
                  #FrontendWithZoey
                  <span className="py-2" aria-label="computer" role="img">
                    💻
                  </span>
                </span>
              </CardBody>
              <CardFooter className="gap-3">
                <div className="flex gap-1">
                  <p className="font-semibold text-default-400 text-small">4</p>
                  <p className=" text-default-400 text-small">Following</p>
                </div>
                <div className="flex gap-1">
                  <p className="font-semibold text-default-400 text-small">97.1K</p>
                  <p className="text-default-400 text-small">Followers</p>
                </div>
              </CardFooter>
            </Card> */}
                </div>
              </div>
            </div>
          </div>
          <div className="items-center rounded-3xl bg-gray-200 mb-12 ">
            <div className="text-blue-500 text-center text-3xl p-12">
              <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900">Danh sách sản phẩm</p>
            </div>
            <div className="grid grid-cols-4 gap-9">
              <Card className="max-w-[242px] hover:bg-slate-100">
                <div className="p-12">
                  <FaFacebookF className=" text-green-500" fill="currentColor" size={75} />
                  <div className="text-green-500 ">
                    Facebook
                  </div>
                </div>
              </Card>
              <Card className="max-w-[242px] hover:bg-slate-100">
                <div className="p-12">
                  <FaFacebookF className=" text-green-500" fill="currentColor" size={75} />
                  <div className="text-green-500 ">
                    Facebook
                  </div>
                </div>
              </Card>
              <Card className="max-w-[242px] hover:bg-slate-100">
                <div className="p-12">
                  <FaFacebookF className=" text-green-500" fill="currentColor" size={75} />
                  <div className="text-green-500 ">
                    Facebook
                  </div>
                </div>
              </Card>
              <Card className="max-w-[242px] hover:bg-slate-100">
                <div className="p-12">
                  <FaFacebookF className=" text-green-500" fill="currentColor" size={75} />
                  <div className="text-green-500 ">
                    Facebook
                  </div>
                </div>
              </Card>
              <Card className="max-w-[242px] hover:bg-slate-100">
                <div className="p-12">
                  <FaFacebookF className=" text-green-500" fill="currentColor" size={75} />
                  <div className="text-green-500 ">
                    Facebook
                  </div>
                </div>
              </Card>
              <Card className="max-w-[242px] hover:bg-slate-100">
                <div className="p-12">
                  <FaFacebookF className=" text-green-500" fill="currentColor" size={75} />
                  <div className="text-green-500 ">
                    Facebook
                  </div>
                </div>
              </Card>
              <Card className="max-w-[242px] hover:bg-slate-100">
                <div className="p-12">
                  <FaFacebookF className=" text-green-500" fill="currentColor" size={75} />
                  <div className="text-green-500 ">
                    Facebook
                  </div>
                </div>
              </Card>
              <Card className="max-w-[242px] hover:bg-slate-100">
                <div className="p-12">
                  <FaFacebookF className=" text-green-500" fill="currentColor" size={75} />
                  <div className="text-green-500 ">
                    Facebook
                  </div>
                </div>
              </Card>
              {/* <Card className="max-w-[450px]">
              <CardHeader className="justify-between">
                <div className="flex gap-5">
                  <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
                  <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                    <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
                  </div>
                </div>
                <Button
                  className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                  color="primary"
                  radius="full"
                  size="sm"
                  variant={isFollowed ? "bordered" : "solid"}
                  onPress={() => setIsFollowed(!isFollowed)}
                >
                  {isFollowed ? "Unfollow" : "Follow"}
                </Button>
              </CardHeader>
              <CardBody className="px-3 py-0 text-small text-default-400">
                <p>
                  Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
                </p>
                <span className="pt-2">
                  #FrontendWithZoey
                  <span className="py-2" aria-label="computer" role="img">
                    💻
                  </span>
                </span>
              </CardBody>
              <CardFooter className="gap-3">
                <div className="flex gap-1">
                  <p className="font-semibold text-default-400 text-small">4</p>
                  <p className=" text-default-400 text-small">Following</p>
                </div>
                <div className="flex gap-1">
                  <p className="font-semibold text-default-400 text-small">97.1K</p>
                  <p className="text-default-400 text-small">Followers</p>
                </div>
              </CardFooter>
            </Card> */}
            </div>
          </div>
          <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/workcation-logo-indigo-600.svg"
                className="mx-auto h-12"
              />
              <figure className="mt-10">
                <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                  <p>
                    “Chuyên cung cấp và giao dịch các sản phẩm số, đặc biệt dành cho cộng đồng MMO (Kiếm tiền online). Tạo ra một môi trường giao dịch an toàn, thuận tiện và đáng tin cậy cho người dùng, giúp giảm thiểu tình trạng lừa đảo trên các nền tảng mạng xã hội và internet.”
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="mx-auto size-10 rounded-full"
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">Judith Black</div>
                    <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    <div className="text-gray-600">CEO of Workcation</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
          <div>
          </div>
        </div>
      </div>
    </>
  );
}