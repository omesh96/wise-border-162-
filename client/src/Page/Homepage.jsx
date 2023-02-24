import MyCarousel from "../Component/MyCarousel";
import { Button, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { MultiCarousel } from "../Component/MultiCarousel";
import SingleCarousel from "../Component/SingleCarousel";

const Homepage = () => {
  return (
    <div>
      <MyCarousel />
      <SimpleGrid columns={[2,4,4,6]} w={"70%"} m="auto" gap={"10px"} mt="2rem">
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250123_01.png" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250123_02.png" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250123_03.png" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250123_04.png" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250123_05.png" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250123_06.png" alt="title"/>
      </SimpleGrid>
      
      <Heading mt={"2rem"} fontSize="20px">Bank Offers</Heading>
      
      <SimpleGrid columns={[2,3,4,4]} w={"70%"} m="auto" gap={"10px"} mt="2rem">
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/be9629f6-cea3-47fe-bd82-114a91340902/t1_hp_aff_m_amex-tues_360_110223.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/be9629f6-cea3-47fe-bd82-114a91340902/t1_hp_aff_m_indusind_360_110223.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/be9629f6-cea3-47fe-bd82-114a91340902/t1_hp_aff_m_AU-bank-300_360_110223.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/be9629f6-cea3-47fe-bd82-114a91340902/t1_hp_aff_m_hsbc_360_110223.jpg" alt="title"/>
      </SimpleGrid>
      
      <Heading mt={"2rem"} fontSize="20px">Best Sellers</Heading>
      
      <MultiCarousel />
      
      <Heading mt={"2rem"} fontSize="20px">Top Offers</Heading>

      <SimpleGrid columns={[2,3,4,4]} w={"70%"} m="auto" gap={"10px"} mt="2rem">
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/b84bd4cb-2234-45c8-ab44-5530870d0f14/hp_dow-topoffersStorefront_m_480_251122_01.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/b84bd4cb-2234-45c8-ab44-5530870d0f14/hp_big-packs-topoffersStorefront_m_480_251122_02.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/b84bd4cb-2234-45c8-ab44-5530870d0f14/hp_combos-topoffersStorefront_m_480_251122_03.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/b84bd4cb-2234-45c8-ab44-5530870d0f14/hp_30-corner-topoffersStorefront_m_480_251122_04.jpg" alt="title"/>
      </SimpleGrid>

      <Heading mt={"2rem"} fontSize="20px">Fruits and Vegetables</Heading>

      <SimpleGrid columns={[2,4,4,6]} w={"70%"} m="auto" gap={"10px"} mt="2rem">
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/22706bf4-e95a-48de-a996-2bc9ab89f164/hp_fresh-fruits-fnv_Storefront_m_250123_01.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/22706bf4-e95a-48de-a996-2bc9ab89f164/hp_fresh-vegetables-fnv_Storefront_m_250123_02.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/22706bf4-e95a-48de-a996-2bc9ab89f164/hp_exotic-fruits-fnv_Storefront_m_250123_03.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/22706bf4-e95a-48de-a996-2bc9ab89f164/hp_cuts-sprouts-fnv_Storefront_m_250123_04.jpg" alt="title" />
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/22706bf4-e95a-48de-a996-2bc9ab89f164/hp_organic-fnc-fnv_Storefront_m_250123_05.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/22706bf4-e95a-48de-a996-2bc9ab89f164/hp_herbs-seasonings-fnv_Storefront_m_250123_06.jpg" alt="title"/>
      </SimpleGrid>
      <Heading mt={"2rem"} fontSize="20px">Your Daily Staples</Heading>

      <SimpleGrid columns={[2,4,4,6]} w={"70%"} m="auto" gap={"10px"} mt="2rem">
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/d54627cb-42ce-43c8-a095-333fc1389601/hp_atta-flour-staplesStorefront_m_480_250123_01.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/d54627cb-42ce-43c8-a095-333fc1389601/hp_rice-staplesStorefront_m_480_250123_02.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/d54627cb-42ce-43c8-a095-333fc1389601/hp_dals-pulses-staplesStorefront_m_480_250123_03.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/d54627cb-42ce-43c8-a095-333fc1389601/hp_cooking-oils-staplesStorefront_m_480_250123_04.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/d54627cb-42ce-43c8-a095-333fc1389601/hp_dry-fruits-staplesStorefront_m_480_250123_05.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/d54627cb-42ce-43c8-a095-333fc1389601/hp_salt-staplesStorefront_m_480_250123_06.jpg" alt="title"/>
      </SimpleGrid>
      <Heading mt={"2rem"} fontSize="20px">Beverages</Heading>

      <SimpleGrid columns={[2,4,4,6]} w={"70%"} m="auto" gap={"10px"} mt="2rem">
      <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/8e70df5f-02d7-470b-9698-315f3329b539/hp_beveragesStorefront_m_250123_1.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/8e70df5f-02d7-470b-9698-315f3329b539/hp_beveragesStorefront_m_250123_2.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/8e70df5f-02d7-470b-9698-315f3329b539/hp_beveragesStorefront_m_250123_3.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/8e70df5f-02d7-470b-9698-315f3329b539/hp_beveragesStorefront_m_250123_4.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/8e70df5f-02d7-470b-9698-315f3329b539/hp_beveragesStorefront_m_250123_5.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/8e70df5f-02d7-470b-9698-315f3329b539/hp_beveragesStorefront_m_250123_6.jpg" alt="title"/>
      </SimpleGrid>
      <Heading mt={"2rem"} fontSize="20px">Snacks Store</Heading>

      <SimpleGrid columns={[2,4,4,4]} w={"70%"} m="auto" gap={"10px"} mt="2rem">
      <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/d41ad35e-4a83-4974-bede-c406abf599a0/hp_chai-Daily-Food-Essential-Storefront_m_480_250123_1.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/d41ad35e-4a83-4974-bede-c406abf599a0/hp_morning-Daily-Food-Essential-Storefront_m_480_250123_2.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/d41ad35e-4a83-4974-bede-c406abf599a0/hp_satisfy-Daily-Food-Essential-Storefront_m_480_250123_3.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/d41ad35e-4a83-4974-bede-c406abf599a0/hp_sweet-Daily-Food-Essential-Storefront_m_480_250123_4.jpg" alt="title"/>
      </SimpleGrid>
      <Heading mt={"2rem"} fontSize="20px">Cleaning & Household</Heading>

      <SimpleGrid columns={[2,4,4,4]} w={"70%"} m="auto" gap={"10px"} mt="2rem">
      <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/bbc18af5-9781-476f-b98a-199d33655f37/hp_cleaners-disfec_cleaningStorefront_m_480_250123_01.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/bbc18af5-9781-476f-b98a-199d33655f37/hp_cleaners-disfec_cleaningStorefront_m_480_250123_01.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/bbc18af5-9781-476f-b98a-199d33655f37/hp_detergebts-favric-cleaningStorefront_m_480_250123_03.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/bbc18af5-9781-476f-b98a-199d33655f37/hp_disposable-cleaningStorefront_m_480_250123_4.jpg" alt="title"/>
      </SimpleGrid>
      <Heading mt={"2rem"} fontSize="20px">Beauty and Hygiene</Heading>

      <SimpleGrid columns={[2,4,4,6]} w={"70%"} m="auto" gap={"10px"} mt="2rem">
      <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/91e86597-b2d2-4bda-93fd-15f9bf8ebc34/hp_b&h_makeup_m_250123_275x184_05.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/91e86597-b2d2-4bda-93fd-15f9bf8ebc34/hp_b&h_makeup_m_250123_275x184_05.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/91e86597-b2d2-4bda-93fd-15f9bf8ebc34/hp_b&h_scentful_m_250123_560x378_01.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/91e86597-b2d2-4bda-93fd-15f9bf8ebc34/hp_b&h_min-30_m_250123_275x184_02.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/91e86597-b2d2-4bda-93fd-15f9bf8ebc34/hp_under-199_m_250123_275x184_03.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/91e86597-b2d2-4bda-93fd-15f9bf8ebc34/hp_skin-care_m_250123_275x184_03.jpg" alt="title"/>
      </SimpleGrid>
      <Heading mt={"2rem"} fontSize="20px">Home and Kitchen</Heading>

      <SimpleGrid columns={[2,4,4,6]} w={"70%"} m="auto" gap={"10px"} mt="2rem">
      <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/a8a18257-1389-4fa4-9532-ffc26e9bcfdf/hp_GMStorefront(BC)_m_250123_1.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/a8a18257-1389-4fa4-9532-ffc26e9bcfdf/hp_GMStorefront(BC)_m_250123_2.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/a8a18257-1389-4fa4-9532-ffc26e9bcfdf/hp_GMStorefront(BC)_m_250123_3.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/a8a18257-1389-4fa4-9532-ffc26e9bcfdf/hp_GMStorefront(BC)_m_250123_4.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/a8a18257-1389-4fa4-9532-ffc26e9bcfdf/hp_GMStorefront(BC)_m_250123_5.jpg" alt="title"/>
        <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/a8a18257-1389-4fa4-9532-ffc26e9bcfdf/hp_GMStorefront(BC)_m_250123_6.jpg" alt="title"/>
      </SimpleGrid>

      <SingleCarousel />
      
      <Heading mt={"2rem"} fontSize="20px">Brand Store</Heading>

      <SimpleGrid columns={[2,4,4,6]} w={"70%"} m="auto" gap={"10px"} mt="2rem">
      <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/dae30b65-7d03-4c40-b2ac-79e99f7f62b2/hp_amul-brandStorefront_m_480_251022_01.jpg" alt="title"/>
      <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/dae30b65-7d03-4c40-b2ac-79e99f7f62b2/hp_dettol-brandStorefront_m_480_251022_02.jpg" alt="title"/>
      <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/dae30b65-7d03-4c40-b2ac-79e99f7f62b2/hp_harpic-brandStorefront_m_480_091122_03.jpg" alt="title"/>
      <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/dae30b65-7d03-4c40-b2ac-79e99f7f62b2/hp_lindberg-brandStorefront_m_480_251022_04.jpg" alt="title"/>
      <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/dae30b65-7d03-4c40-b2ac-79e99f7f62b2/hp_Tasties-brandStorefront_m_480_251022_05.jpg" alt="title"/>
      <Image border={"1px solid lightgrey"} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/dae30b65-7d03-4c40-b2ac-79e99f7f62b2/hp_durex-brandStorefront_m_480_251022_06.jpg" alt="title"/>
      </SimpleGrid>

      <Image m={"auto"} w={"70%"} mt="2rem" src="https://www.bigbasket.com/media/uploads/banner_images/hp_bbw_c_400_web_wellness_banner_1_dec_w2_14012023.jpg" alt="image" />
      
      {/* <br /> */}
    </div>
  );
};
export default Homepage;
