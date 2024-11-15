"use client"
import { Avatar } from "@nextui-org/react";
import { FaUser } from "react-icons/fa";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button, cn } from "@nextui-org/react";
import Image from "next/image";
import profile from './Logo.png'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";

export default function Nav() {
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="mt-2">
                                <Link href="/">
                                    <Image
                                        src={profile}
                                        alt="Picture of the author"
                                        width={60}
                                        height={60}
                                    />
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link href="/Product" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Sản phẩm</Link>
                                    <Link href="/Service" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Dịch vụ</Link>
                                    <Link href="/Support" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Hỗ trợ</Link>
                                    <Link href="/News" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Chia sẻ</Link>
                                    <Link href="" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Công cụ</Link>
                                    <Link href="/Recharge" className="rounded-md  bg-gray-900 px-3 py-2 text-sm font-medium text-white">Nạp tiền</Link>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <Dropdown>
                                    <DropdownTrigger>
                                        <button>
                                            <div className="flex gap-4 items-center">
                                                <Avatar showFallback fallback={
                                                    <FaUser className="animate-pulse w-6 h-6 text-default-500" fill="currentColor" size={20} />
                                                } />
                                            </div>
                                        </button>
                                    </DropdownTrigger>
                                    <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
                                        <DropdownSection title="Actions" showDivider>
                                            <DropdownItem
                                                key=""
                                                shortcut=""
                                                description=""
                                            >
                                                Thông tin tài khoản
                                            </DropdownItem>
                                            <DropdownItem
                                                key=""
                                                shortcut=""
                                                description=""
                                            >
                                                Số dư: 1.000$
                                            </DropdownItem>
                                            <DropdownItem
                                                key=""
                                                shortcut=""
                                                description=""
                                            >
                                                Đơn hàng đã mua
                                            </DropdownItem>
                                            <DropdownItem
                                                key=""
                                                shortcut=""
                                                description=""
                                            >
                                                Lịch sử giao dịch
                                            </DropdownItem>
                                        </DropdownSection>
                                        <DropdownSection title="-----------------------------------">
                                            <DropdownItem
                                                key="delete"
                                                className="text-danger"
                                                color="danger"
                                                shortcut=""
                                                description="Thoát"
                                            >
                                                <Button onPress={onOpen} color="primary">Đổi mật khẩu</Button>
                                            </DropdownItem>
                                        </DropdownSection>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    endContent={
                                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Email"
                                    placeholder="Enter your email"
                                    variant="bordered"
                                />
                                <Input
                                    endContent={
                                        <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                    variant="bordered"
                                />
                                <div className="flex py-2 px-1 justify-between">
                                    <Checkbox
                                        classNames={{
                                            label: "text-small",
                                        }}
                                    >
                                        Remember me
                                    </Checkbox>
                                    <Link color="primary" href="#" size="sm">
                                        Forgot password?
                                    </Link>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Sign in
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}