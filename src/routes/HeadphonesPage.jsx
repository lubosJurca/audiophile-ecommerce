// components
import ItemHeader from "../components/Item/ItemHeader";
import HeadphonesList from "../components/Headphones/HeadphonesList";
import ItemsNavigation from "../components/ItemsNavigation/ItemsNavigation";

function HeadphonesPage() {
  return (
    <>
      <ItemHeader title="Headphones" />
      <HeadphonesList />
      <ItemsNavigation />
    </>
  );
}

export default HeadphonesPage;
