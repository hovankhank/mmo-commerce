'use client'
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import {Pagination} from "@nextui-org/react";

const ProductLists = async () => {
    const [isFollowed, setIsFollowed] = React.useState(false);
    return (
        <>
            <div className="bg-white">
                <div>
                    <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
                        <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>

                        <div className="fixed inset-0 z-40 flex">

                            <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                <div className="flex items-center justify-between px-4">
                                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                    <button type="button" className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
                                        <span className="sr-only">Close menu</span>
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <form className="mt-4 border-t border-gray-200">
                                    <h3 className="sr-only">Categories</h3>
                                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                                        <li>
                                            <a href="#" className="block px-2 py-3">Totes</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-2 py-3">Backpacks</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-2 py-3">Travel Bags</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-2 py-3">Hip Bags</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-2 py-3">Laptop Sleeves</a>
                                        </li>
                                    </ul>

                                    <div className="border-t border-gray-200 px-4 py-6">
                                        <h3 className="-mx-2 -my-3 flow-root">
                                            <button type="button" className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
                                                <span className="font-medium text-gray-900">Color</span>
                                                <span className="ml-6 flex items-center">

                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                        <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                                                    </svg>

                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                        <path fill-rule="evenodd" d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z" clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>

                                        <div className="pt-6" id="filter-section-mobile-0">
                                            <div className="space-y-6">
                                                <div className="flex items-center">
                                                    {/* <input id="filter-mobile-color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-color-0" className="ml-3 min-w-0 flex-1 text-gray-500">White</label> */}
                                                </div>
                                                <div className="flex items-center">
                                                    {/* <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-color-1" className="ml-3 min-w-0 flex-1 text-gray-500">Beige</label> */}
                                                </div>
                                                <div className="flex items-center">
                                                    {/* <input id="filter-mobile-color-2" name="color[]" value="blue" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-color-2" className="ml-3 min-w-0 flex-1 text-gray-500">Blue</label> */}
                                                </div>
                                                <div className="flex items-center">
                                                    {/* <input id="filter-mobile-color-3" name="color[]" value="brown" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-color-3" className="ml-3 min-w-0 flex-1 text-gray-500">Brown</label> */}
                                                </div>
                                                <div className="flex items-center">
                                                    {/* <input id="filter-mobile-color-4" name="color[]" value="green" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-color-4" className="ml-3 min-w-0 flex-1 text-gray-500">Green</label> */}
                                                </div>
                                                <div className="flex items-center">
                                                    {/* <input id="filter-mobile-color-5" name="color[]" value="purple" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-color-5" className="ml-3 min-w-0 flex-1 text-gray-500">Purple</label> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 px-4 py-6">
                                        <h3 className="-mx-2 -my-3 flow-root">

                                            <button type="button" className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-1" aria-expanded="false">
                                                <span className="font-medium text-gray-900">Category</span>
                                                <span className="ml-6 flex items-center">

                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                        <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                                                    </svg>
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                        <path fill-rule="evenodd" d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z" clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>

                                        <div className="pt-6" id="filter-section-mobile-1">
                                            <div className="space-y-6">
                                                <div className="flex items-center">
                                                    {/* <input id="filter-mobile-category-0" name="category[]" value="new-arrivals" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-category-0" className="ml-3 min-w-0 flex-1 text-gray-500">New Arrivals</label> */}
                                                </div>
                                                <div className="flex items-center">
                                                    {/* <input id="filter-mobile-category-1" name="category[]" value="sale" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-category-1" className="ml-3 min-w-0 flex-1 text-gray-500">Sale</label> */}
                                                </div>
                                                <div className="flex items-center">
                                                    {/* <input id="filter-mobile-category-2" name="category[]" value="travel" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-category-2" className="ml-3 min-w-0 flex-1 text-gray-500">Travel</label> */}
                                                </div>
                                                <div className="flex items-center">
                                                    {/* <input id="filter-mobile-category-3" name="category[]" value="organization" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-category-3" className="ml-3 min-w-0 flex-1 text-gray-500">Organization</label> */}
                                                </div>
                                                <div className="flex items-center">
                                                    {/* <input id="filter-mobile-category-4" name="category[]" value="accessories" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-category-4" className="ml-3 min-w-0 flex-1 text-gray-500">Accessories</label> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 px-4 py-6">
                                        <h3 className="-mx-2 -my-3 flow-root">

                                            <button type="button" className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-2" aria-expanded="false">
                                                <span className="font-medium text-gray-900">Size</span>
                                                <span className="ml-6 flex items-center">

                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                        <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                                                    </svg>

                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                        <path fill-rule="evenodd" d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z" clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>
                                        <div className="pt-6" id="filter-section-mobile-2">
                                            <div className="space-y-6">
                                                <div className="flex items-center">
                                                    {/* <input id="filter-mobile-size-0" name="size[]" value="2l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-size-0" className="ml-3 min-w-0 flex-1 text-gray-500">2L</label> */}
                                                </div>
                                                <div className="flex items-center">
                                                    {/* <input id="filter-mobile-size-1" name="size[]" value="6l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-size-1" className="ml-3 min-w-0 flex-1 text-gray-500">6L</label> */}
                                                </div>
                                                <div className="flex items-center">
                                                    {/* <input id="filter-mobile-size-2" name="size[]" value="12l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-size-2" className="ml-3 min-w-0 flex-1 text-gray-500">12L</label> */}
                                                </div>
                                                <div className="flex items-center">
                                                    {/* <input id="filter-mobile-size-3" name="size[]" value="18l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-size-3" className="ml-3 min-w-0 flex-1 text-gray-500">18L</label> */}
                                                </div>
                                                <div className="flex items-center">
                                                    {/* <input id="filter-mobile-size-4" name="size[]" value="20l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-size-4" className="ml-3 min-w-0 flex-1 text-gray-500">20L</label> */}
                                                </div>
                                                <div className="flex items-center">
                                                    {/* <input id="filter-mobile-size-5" name="size[]" value="40l" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-size-5" className="ml-3 min-w-0 flex-1 text-gray-500">40L</label> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="mx-12 max-w-full px-4 sm:px-6 lg:px-8">
                        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-12">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Sản phẩm</h1>

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
                            <h2 id="products-heading" className="sr-only">Products</h2>

                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                                <form className="hidden lg:block">
                                    <h3 className="sr-only">Categories</h3>
                                    <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                        <li>
                                            <a href="#">Gmail</a>
                                        </li>
                                        <li>
                                            <a href="#">HotMail</a>
                                        </li>
                                        <li>
                                            <a href="#">Tài khoản</a>
                                        </li>
                                        <li>
                                            <a href="#">Phần mềm</a>
                                        </li>
                                        <li>
                                            <a href="#">Other</a>
                                        </li>
                                    </ul>
                                    <div className="border-b border-gray-200 py-6">
                                        <h3 className="-my-3 flow-root">
                                            <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                                                <span className="font-medium text-gray-900">Color</span>
                                                <span className="ml-6 flex items-center">

                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                        <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                                                    </svg>

                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                        <path fill-rule="evenodd" d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z" clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>

                                        <div className="pt-6" id="filter-section-0">
                                            <div className="space-y-4">
                                                <div className="flex items-center">
                                                    {/* <input id="filter-color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-color-0" className="ml-3 text-sm text-gray-600">White</label> */}
                                                </div>
                                                <div className="flex items-center">
                                                    {/* <input id="filter-color-1" name="color[]" value="beige" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-color-1" className="ml-3 text-sm text-gray-600">Beige</label> */}
                                                </div>
                                                <div className="flex items-center">
                                                    {/* <input id="filter-color-2" name="color[]" value="blue" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-color-2" className="ml-3 text-sm text-gray-600">Blue</label> */}
                                                </div>
                                                <div className="flex items-center">
                                                    {/* <input id="filter-color-3" name="color[]" value="brown" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-color-3" className="ml-3 text-sm text-gray-600">Brown</label> */}
                                                </div>
                                                <div className="flex items-center">
                                                    {/* <input id="filter-color-4" name="color[]" value="green" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-color-4" className="ml-3 text-sm text-gray-600">Green</label> */}
                                                </div>
                                                <div className="flex items-center">
                                                    {/* <input id="filter-color-5" name="color[]" value="purple" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-color-5" className="ml-3 text-sm text-gray-600">Purple</label> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-b border-gray-200 py-6">
                                        <h3 className="-my-3 flow-root">

                                            <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
                                                <span className="font-medium text-gray-900">Category</span>
                                                <span className="ml-6 flex items-center">

                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                        <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                                                    </svg>

                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                        <path fill-rule="evenodd" d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z" clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>

                                        <div className="pt-6" id="filter-section-1">
                                            <div className="space-y-4">
                                                <div className="flex items-center">
                                                    {/* <input id="filter-category-0" name="category[]" value="new-arrivals" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-category-0" className="ml-3 text-sm text-gray-600">New Arrivals</label> */}
                                                </div>
                                                <div className="flex items-center">
                                                    {/* <input id="filter-category-1" name="category[]" value="sale" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-category-1" className="ml-3 text-sm text-gray-600">Sale</label> */}
                                                </div>
                                                <div className="flex items-center">
                                                    {/* <input id="filter-category-2" name="category[]" value="travel" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-category-2" className="ml-3 text-sm text-gray-600">Travel</label> */}
                                                </div>
                                                <div className="flex items-center">
                                                    {/* <input id="filter-category-3" name="category[]" value="organization" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-category-3" className="ml-3 text-sm text-gray-600">Organization</label> */}
                                                </div>
                                                <div className="flex items-center">
                                                    {/* <input id="filter-category-4" name="category[]" value="accessories" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-category-4" className="ml-3 text-sm text-gray-600">Accessories</label> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-b border-gray-200 py-6">
                                        <h3 className="-my-3 flow-root">

                                            <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                                                <span className="font-medium text-gray-900">Size</span>
                                                <span className="ml-6 flex items-center">
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                        <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                                                    </svg>
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                        <path fill-rule="evenodd" d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z" clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>
                                        <div className="pt-6" id="filter-section-2">
                                            <div className="space-y-4">
                                                <div className="flex items-center">
                                                    {/* <input id="filter-size-0" name="size[]" value="2l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-size-0" className="ml-3 text-sm text-gray-600">2L</label> */}
                                                </div>
                                                <div className="flex items-center">
                                                    {/* <input id="filter-size-1" name="size[]" value="6l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-size-1" className="ml-3 text-sm text-gray-600">6L</label> */}
                                                </div>
                                                <div className="flex items-center">
                                                    {/* <input id="filter-size-2" name="size[]" value="12l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-size-2" className="ml-3 text-sm text-gray-600">12L</label> */}
                                                </div>
                                                <div className="flex items-center">
                                                    {/* <input id="filter-size-3" name="size[]" value="18l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-size-3" className="ml-3 text-sm text-gray-600">18L</label> */}
                                                </div>
                                                <div className="flex items-center">
                                                    {/* <input id="filter-size-4" name="size[]" value="20l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-size-4" className="ml-3 text-sm text-gray-600">20L</label> */}
                                                </div>
                                                <div className="flex items-center">
                                                    {/* <input id="filter-size-5" name="size[]" value="40l" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-size-5" className="ml-3 text-sm text-gray-600">40L</label> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                <div className="lg:col-span-3">
                                    <div className="grid grid-cols-3 gap-4 m-14">
                                    <Card className="max-w-[450px]">
                                        <CardHeader className="justify-between">
                                            <div className="flex gap-5">
                                                <Avatar isBordered radius="full" size="md" src="" />
                                                <div className="flex flex-col gap-1 items-start justify-center">
                                                    <h4 className="text-small font-semibold leading-none text-default-600">Tài khoản GG ADS Ngưỡng 100HKD</h4>
                                                    <h5 className="text-small tracking-tight text-default-400">@dungjpit</h5>
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
                                            <div>
                                                Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
                                            </div>
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
                                                <p className="text-default-400 text-small">Buy</p>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                    <Card className="max-w-[450px]">
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
                                            <div>
                                                Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
                                            </div>
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
                                    </Card>
                                    <Card className="max-w-[450px]">
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
                                            <div>
                                                Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
                                            </div>
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
                                    </Card>
                                    <Card className="max-w-[450px]">
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
                                            <div>
                                                Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
                                            </div>
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
                                    </Card>
                                    <Card className="max-w-[450px]">
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
                                            <div>
                                                Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
                                            </div>
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
                                    </Card>
                                    </div>
                                    <div className="flex justify-end">
                                    <Pagination showControls total={10} initialPage={1} />
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

export default ProductLists;