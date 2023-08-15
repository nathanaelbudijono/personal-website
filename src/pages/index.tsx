import Seo from "@/components/core/seo";
import Feat from "@/modules/home/feat";
import MainPage from "@/modules/home/main";

export default function Home() {
  return (
    <main>
      <Seo
        title="Home"
        description="A Math enthusiast who dreams to build Computer Science with Mathematics. Currently learning Software Development as a full-stack developer. I also enjoy writing blogs and documentation regarding certain past projects ."
      />
      <MainPage />
      <Feat />
    </main>
  );
}
