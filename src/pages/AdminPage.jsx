import LoadingSpinner from "@/components/LoadingSpinner";
import ScreenOverlay from "@/components/ScreenOverlay";
import useOverlay from "@/components/ScreenOverlay/use-screen-overlay";
import { Separator } from "@/components/ui/separator";

export default function AdminPage() {
  const overlay = useOverlay(true);

  return (
    <div className="min-h-screen flex items-stretch">
      <ScreenOverlay {...overlay} notCloseable>
        <div className="h-full w-full flex justify-center items-center">
          <LoadingSpinner className="text-white border-[6px] h-[50px] w-[50px]" />
        </div>
      </ScreenOverlay>
      <div className="w-[300px] bg-gray-50" />
      <Separator orientation="vertical" className="h-auto" />
      <div className="flex flex-col"></div>
    </div>
  );
}
