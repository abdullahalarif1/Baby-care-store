import Container from "@/components/Container";
import FlashSaleBody from "@/components/Home/FlashSaleBody";
import { TFlashProduct } from "@/Types/type";
import Countoun from "@/components/Countoun";

const FlashSale = async () => {
  const res = await fetch(
    "https://baby-care-store-backend.vercel.app/flash-sale"
  );
  const flashes = await res.json();

  return (
    <Container>
      <div className="flex justify-between items-center pb-5 pt-10">
        <h1 className="text-3xl font-semibold">Flash Sale</h1>
        <Countoun />
      </div>
      <div className="grid md:grid-cols-4 gap-5">
        {flashes.map((flash: TFlashProduct) => (
          <FlashSaleBody flash={flash} key={flash._id} />
        ))}
      </div>
    </Container>
  );
};

export default FlashSale;
