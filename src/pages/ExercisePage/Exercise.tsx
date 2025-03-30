

import Button from "@/components/Button";
import { useRef } from "react";

export default function Exercise() {
  
  const CircuitsBoard = {
    title: [1, 2, 3, 4, 'cool down', 'warm up'],
  };
 
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([])
  
  const handleBrowseClick = (index: number) => {
    fileInputRefs.current[index]?.click()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, textareaId: string) => {
    const file = event.target.files?.[0]
    if (file) {
      const textarea = document.getElementById(textareaId) as HTMLTextAreaElement
      if (textarea) {
        textarea.value = file.name
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#b8e2ee]">
     
     
      <main className="flex-1 p-8">
        <div className="bg-[#49a0bb] rounded-lg p-6 text-white">
          <h1 className="text-xl font-semibold mb-6">Edit circuit detail</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {CircuitsBoard.title.map((circuit,index) => (
              <div
                key={circuit}
                className="space-y-2 border border-dashed border-[#f5f2f2e0] border-black px-3 py-5 rounded-xl"
              >
                <label className="text-sm">Circuit {circuit}</label>
                <div className="flex flex-col justify-center items-center gap-3 text-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#44b2cb"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-download cursor-pointer"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                  </div>
                  <button  onClick={() => handleBrowseClick(index)} className="bg-[#bae3eb] self-center text-[#7aa5b3] hover:bg-sky-400 px-3 py-1 rounded-full w-fit text-sm whitespace-nowrap">
                    Browse
                  </button>
                </div>
                <div className="flex gap-2">
                  <textarea
                    className="w-full text-[#000] p-2 rounded-md text-gray-800 text-sm outline-light-blue"
                    placeholder="Type description"
                    id={`circuit-${circuit}`}
                    rows={4}
                  />
                   <input
                      type="file"
                      className="hidden"
                      ref={el => fileInputRefs.current[index] = el}
                      onChange={(e) => handleFileChange(e, `circuit-${circuit}`)}
                    />
                </div>
              </div>
            ))}
          </div>

         

          <div className="flex justify-center">
            <Button
              category="primary"
              width="regular"
            >Save</Button>
          </div>
        </div>
      </main>
     
    </div>
  );
}

