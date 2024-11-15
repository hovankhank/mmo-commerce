'use client'

import { Textarea, Button, Input, Card, CardHeader, CardBody, CardFooter, Avatar} from "@nextui-org/react";
import React from "react";
import { FaFacebookF} from 'react-icons/fa';
import { FaSearch } from "react-icons/fa";
const Services = async () => {
    const [isFollowed, setIsFollowed] = React.useState(false);
    return (
        <>
            <div className="bg-white">
                <div>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Dịch vụ</h1>

                            <div className="flex items-center">
                                <div className="relative inline-block text-left">
                                    <div>
                                        <button type="button" className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
                                            Sort
                                            <svg className="-mr-1 ml-1 h-5 w-5 shrink-0 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                                        <div className="py-1" role="none">

                                            <a href="#" className="block px-4 py-2 text-sm font-medium text-gray-900" role="menuitem" id="menu-item-0">Most Popular</a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-500" role="menuitem" id="menu-item-1">Best Rating</a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-500" role="menuitem" id="menu-item-2">Newest</a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-500" role="menuitem" id="menu-item-3">Price: Low to High</a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-500" role="menuitem" id="menu-item-4">Price: High to Low</a>
                                        </div>
                                    </div> */}
                                </div>

                                <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                    <span className="sr-only">View grid</span>
                                    <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" data-slot="icon">
                                        <path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 0 0 2 4.25v2.5A2.25 2.25 0 0 0 4.25 9h2.5A2.25 2.25 0 0 0 9 6.75v-2.5A2.25 2.25 0 0 0 6.75 2h-2.5Zm0 9A2.25 2.25 0 0 0 2 13.25v2.5A2.25 2.25 0 0 0 4.25 18h2.5A2.25 2.25 0 0 0 9 15.75v-2.5A2.25 2.25 0 0 0 6.75 11h-2.5Zm9-9A2.25 2.25 0 0 0 11 4.25v2.5A2.25 2.25 0 0 0 13.25 9h2.5A2.25 2.25 0 0 0 18 6.75v-2.5A2.25 2.25 0 0 0 15.75 2h-2.5Zm0 9A2.25 2.25 0 0 0 11 13.25v2.5A2.25 2.25 0 0 0 13.25 18h2.5A2.25 2.25 0 0 0 18 15.75v-2.5A2.25 2.25 0 0 0 15.75 11h-2.5Z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                                <button type="button" className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
                                    <span className="sr-only">Filters</span>
                                    <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" data-slot="icon">
                                        <path fill-rule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 0 1 .628.74v2.288a2.25 2.25 0 0 1-.659 1.59l-4.682 4.683a2.25 2.25 0 0 0-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 0 1 8 18.25v-5.757a2.25 2.25 0 0 0-.659-1.591L2.659 6.22A2.25 2.25 0 0 1 2 4.629V2.34a.75.75 0 0 1 .628-.74Z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <section aria-labelledby="products-heading" className="pb-24 pt-6">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                                <form className="">
                                    <div className="mb-4">
                                    <Input
                                        type="search"
                                        placeholder="Tìm kiếm"
                                        labelPlacement="outside"
                                    />
                                    </div>
                                    <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                        <li>
                                            <a href="#">Nội dung khác</a>
                                        </li>
                                        <li>
                                            <a href="#">Facebook</a>
                                        </li>
                                        <li>
                                            <a href="#">TikTok</a>
                                        </li>
                                        <li>
                                            <a href="#">Telegram</a>
                                        </li>
                                        <li>
                                            <a href="#">Youtube</a>
                                        </li>
                                        <li>
                                            <a href="#">Airdrop</a>
                                        </li>
                                        <li>
                                            <a href="#">Other</a>
                                        </li>
                                    </ul>
                                </form>
                                <div className="lg:col-span-3">
                                    <div className="grid grid-cols-4 gap-4 m-14">
                                    <Card className="max-w-[200px] hover:bg-slate-100">
                                        <div className="p-12">
                                        <FaFacebookF className=" text-green-500" fill="currentColor" size={75} />
                                        <div className="text-green-500 ">
                                            Facebook
                                        </div>
                                        </div>
                                    </Card>
                                    <Card className="max-w-[200px]">
                                        <div className="text-green-500 p-14">
                                            Tăng Like Fanpage
                                        </div>
                                    </Card>
                                    <Card className="max-w-[200px]">
                                        <div className="text-green-500 p-14">
                                            Tăng Like Fanpage
                                        </div>
                                    </Card>
                                    <Card className="max-w-[200px]">
                                        <div className="text-green-500 p-14">
                                            Tăng Like Fanpage
                                        </div>
                                    </Card>
                                    <Card className="max-w-[200px]">
                                        <div className="text-green-500 p-14">
                                            Tăng Like Fanpage
                                        </div>
                                    </Card>
                                    <Card className="max-w-[200px]">
                                        <div className="text-green-500 p-14">
                                            Tăng Like Fanpage
                                        </div>
                                    </Card>
                                    <Card className="max-w-[200px]">
                                        <div className="text-green-500 p-14">
                                            Tăng Like Fanpage
                                        </div>
                                    </Card>
                                    <Card className="max-w-[200px]">
                                        <div className="text-green-500 p-14">
                                            Tăng Like Fanpage
                                        </div>
                                    </Card>
                                    <Card className="max-w-[200px]">
                                        <div className="text-green-500 p-14">
                                            Tăng Like Fanpage
                                        </div>
                                    </Card>
                                    <Card className="max-w-[200px]">
                                        <div className="text-green-500 p-14">
                                            Tăng Like Fanpage
                                        </div>
                                    </Card>
                                    <Card className="max-w-[200px]">
                                        <div className="text-green-500 p-14">
                                            Tăng Like Fanpage
                                        </div>
                                    </Card>
                                    <Card className="max-w-[200px]">
                                        <div className="text-green-500 p-14">
                                            Tăng Like Fanpage
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
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Services;