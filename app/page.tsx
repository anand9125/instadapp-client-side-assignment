import Header from "./component/header";
import TopHeader from "./component/utils/top-header";

export default function Home() {
  return (
    <main>
      <Header/>
      <div className="py-5 px-2.5 flex flex-col gap-y-5">
        <TopHeader />
      </div>
       

        
    </main>
     
  );
}
