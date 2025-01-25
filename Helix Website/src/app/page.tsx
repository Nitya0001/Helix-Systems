'use client'

import React, { useState, useEffect, useRef } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FlipWords } from "@/components/ui/flip-words";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Package, Calendar, DollarSign, User, Code, CheckCircle, ArrowLeft, Loader, AlertCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

type OrderStatus = "On-Boarding" | "Awaiting Payment" | "Paid" | "Developing" | "Finalization" | "Completed";

interface OrderData {
  orderId: string;
  clientName: string;
  developerName: string;
  status: OrderStatus;
  progress: number;
  price: string;
  botName: string;
  creationDate: string;
}

type TemplateOrders = {
  [key: string]: OrderData;
};

const templateOrders: TemplateOrders = {
  "ABCD12345EFGH": {
    orderId: "ABCD-12345-EFGH",
    clientName: "John Doe",
    developerName: "Jane Smith",
    status: "Developing",
    progress: 60,
    price: "$500",
    botName: "HelixBot",
    creationDate: "2023-05-15"
  },
  "WXYZ67890IJKL": {
    orderId: "WXYZ-67890-IJKL",
    clientName: "Alice Johnson",
    developerName: "Bob Williams",
    status: "Completed",
    progress: 100,
    price: "$750",
    botName: "SuperBot",
    creationDate: "2023-05-10"
  }
};

const statusColors: Record<OrderStatus, string> = {
  "On-Boarding": "bg-gray-500",
  "Awaiting Payment": "bg-red-500",
  "Paid": "bg-yellow-500",
  "Developing": "bg-orange-500",
  "Finalization": "bg-red-300",
  "Completed": "bg-green-500"
};

export default function Home() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<string[]>(Array(13).fill(''));
  const [currentPage, setCurrentPage] = useState<number>(0);
  const words = ["Quality", "Innovation", "Efficiency", "Reliability", "Excellence", "Performance"];
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const orderIdFromUrl = urlParams.get('orderId');
    
    if (orderIdFromUrl) {
      const formattedOrderId = orderIdFromUrl.replace(/-/g, '').slice(0, 13).split('');
      setIsModalOpen(true);
      setOrderId(formattedOrderId.concat(Array(13 - formattedOrderId.length).fill('')));
      window.history.replaceState({}, '', '/');
    }
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        const firstEmptyIndex = orderId.findIndex(digit => digit === '');
        if (firstEmptyIndex !== -1 && inputRefs.current[firstEmptyIndex]) {
          inputRefs.current[firstEmptyIndex]?.focus();
        }
      }, 100);
    }
  }, [isModalOpen]);

  const handleOrderIdChange = (index: number, value: string) => {
    const newOrderId = [...orderId];
    newOrderId[index] = value.toUpperCase();
    setOrderId(newOrderId);
    if (value && index < 12) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text').replace(/-/g, '').slice(0, 13);
    const newOrderId = [...orderId];
    for (let i = 0; i < pastedText.length; i++) {
      newOrderId[i] = pastedText[i].toUpperCase();
    }
    setOrderId(newOrderId);
    inputRefs.current[pastedText.length]?.focus();
  };

  const handleTrackOrder = async () => {
    setIsLoading(true);
    setError(null);
    setOrderData(null);

    await new Promise(resolve => setTimeout(resolve, 1500));

    const fullOrderId = orderId.join('');
    if (templateOrders[fullOrderId]) {
      setOrderData(templateOrders[fullOrderId]);
      setCurrentPage(1);
    } else {
      setError("Order not found. Please check your order ID and try again.");
      setCurrentPage(1);
    }

    setIsLoading(false);
  };
  const getStatusIcon = (status: OrderStatus) => {
    switch (status) {
      case "On-Boarding": return <Loader className="inline mr-2" />;
      case "Awaiting Payment": return <DollarSign className="inline mr-2" />;
      case "Paid": return <CheckCircle className="inline mr-2" />;
      case "Developing": return <Code className="inline mr-2" />;
      case "Finalization": return <Package className="inline mr-2" />;
      case "Completed": return <CheckCircle className="inline mr-2" />;
      default: return <AlertCircle className="inline mr-2" />;
    }
  };

  const resetOrderTracker = () => {
    setOrderId(Array(13).fill(''));
    setOrderData(null);
    setError(null);
    setCurrentPage(0);
  };

  useEffect(() => {
    if (!isModalOpen) {
      resetOrderTracker();
    }
  }, [isModalOpen]);

  const isOrderIdComplete = orderId.every(digit => digit !== '');

  return (
    <div className={`relative flex items-center justify-center min-h-screen transition-all duration-300 bg-gradient-to-br from-gray-900 to-black ${isModalOpen ? 'backdrop-blur-xl' : ''}`}>
      <BackgroundLines>
        <div className="relative z-20 flex flex-col items-center text-center">
          <Button
            variant="ghost"
            className="mb-8 bg-transparent text-white hover:bg-white transition-all duration-200 group"
            onClick={() => window.open('https://discord.gg/helixsystems', '_blank')}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <MessageCircle className="mr-2 h-4 w-4 opacity-100 transition-opacity duration-100 group-hover:opacity-0" />
            Join Discord Server
            <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </Button>

          <h2 className="text-2xl md:text-4xl lg:text-7xl font-bold text-center text-white font-sans tracking-tight mb-8">
            What sets Helix Systems apart?<br />{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span><FlipWords words={words} /></span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span><FlipWords words={words} /></span>
              </div>
            </div>
          </h2>

          <div className="flex space-x-4">
            <Button
              variant="outline"
              className="mb-8 bg-transparent text-white hover:bg-white transition-all duration-200 group"
              onClick={() => window.open('https://discord.gg/helixsystems', '_blank')}
            >
              Getting Started
            </Button>
            <Button
              variant="outline"
              className="mb-8 bg-transparent text-white hover:bg-white transition-all duration-200 group"
              onClick={() => setIsModalOpen(true)}
            >
              Track Order
            </Button>
          </div>
        </div>
      </BackgroundLines>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className={`bg-black text-white z-50 ${currentPage === 0 ? 'sm:max-w-[750px]' : 'sm:max-w-[500px]'}`}>
          <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center">
              <Package className="mr-2" /> Order Tracker
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              {currentPage === 0 ? "Enter your order ID to begin:" : "Your order details:"}
            </DialogDescription>
          </DialogHeader>
          {currentPage === 0 && (
            <div className="space-y-4">
              <div className="flex justify-center items-center space-x-1 px-2">
                {orderId.map((value, index) => (
                  <React.Fragment key={index}>
                    <Input
                      ref={(el) => { inputRefs.current[index] = el; }}
                      className="w-10 h-10 text-center text-lg bg-white border-gray-700 text-black"
                      type="text"
                      maxLength={1}
                      value={value}
                      onChange={(e) => handleOrderIdChange(index, e.target.value)}
                      onPaste={handlePaste}
                    />
                    {(index === 3 || index === 8) && <span className="text-2xl text-white mx-1">-</span>}
                  </React.Fragment>
                ))}
                  </div>
              <Button
                onClick={handleTrackOrder}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                disabled={isLoading || !isOrderIdComplete}
              >
                {isLoading ? <Loader className="mr-2 h-4 w-4 animate-spin" /> : <Package className="mr-2 h-4 w-4" />}
                {isLoading ? 'Tracking...' : 'Track Now'}
              </Button>
            </div>
          )}
          {currentPage === 1 && (
            <div className="space-y-4">
              {orderData ? (
                <>
                  <div className="bg-green-900/50 p-2 rounded-lg text-center mb-2">
                    <CheckCircle className="inline-block text-green-500 h-6 w-6 mr-2" />
                    <span className="text-green-400 font-bold">Order Found Successfully!</span>
                  </div>
                  <div className="bg-black p-3 rounded-lg space-y-2">
                    <h3 className="font-bold text-lg mb-2 flex items-center">
                      <CheckCircle className="mr-2 text-green-500" /> Order Details
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-gray-700 p-1.5 rounded">
                        <p className="text-xs text-gray-400">Order ID</p>
                        <p>{orderData.orderId}</p>
                      </div>
                      <div className="bg-gray-700 p-1.5 rounded">
                        <p className="text-xs text-gray-400">Client</p>
                        <p>{orderData.clientName}</p>
                      </div>
                      <div className="bg-gray-700 p-1.5 rounded">
                        <p className="text-xs text-gray-400">Developer</p>
                        <p>{orderData.developerName}</p>
                      </div>
                      <div className="bg-gray-700 p-1.5 rounded">
                        <p className="text-xs text-gray-400">Status</p>
                        <p className="flex items-center">
                          {getStatusIcon(orderData.status)} {orderData.status}
                        </p>
                      </div>
                      <div className="bg-gray-700 p-1.5 rounded">
                        <p className="text-xs text-gray-400">Price</p>
                        <p>{orderData.price}</p>
                      </div>
                      <div className="bg-gray-700 p-1.5 rounded">
                        <p className="text-xs text-gray-400">Bot</p>
                        <p>{orderData.botName}</p>
                      </div>
                      <div className="bg-gray-700 p-1.5 rounded col-span-2">
                        <p className="text-xs text-gray-400">Created</p>
                        <p>{orderData.creationDate}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-black border-white p-3 rounded-lg">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${statusColors[orderData.status]}`}
                        style={{ width: `${orderData.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-red-900/50 p-4 rounded-lg text-center">
                  <AlertCircle className="mx-auto text-red-500 h-12 w-12 mb-2" />
                  <p className="text-red-400">{error}</p>
                </div>
              )}
              <Button
                onClick={resetOrderTracker}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Track Another Order
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}