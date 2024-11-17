import React from "react";
import { useState,useEffect } from "react";

export default function Dataset() {
    const [selectedCategory, setSelectedCategory] = useState('Real');
    const [images, setImages] = useState([]);
    const [shuffledImages, setShuffledImages] = useState([]);
  

  const mockImages = {
    Real: ["000405.jpg","000406.jpg","000407.jpg","000408.jpg","000409.jpg","000410.jpg","000411.jpg","000412.jpg","000413.jpg","000414.jpg","000415.jpg","000416.jpg","000417.jpg","000418.jpg","000419.jpg","000420.jpg","000421.jpg","000422.jpg","000423.jpg","000424.jpg","000425.jpg","000426.jpg","000427.jpg","000428.jpg","000429.jpg","000430.jpg","000431.jpg","000432.jpg","000433.jpg","000434.jpg","000435.jpg","000436.jpg","000437.jpg","000438.jpg","000439.jpg","000440.jpg","000441.jpg","000442.jpg","000443.jpg","000444.jpg","000445.jpg","000446.jpg","000447.jpg","000448.jpg","000449.jpg","000450.jpg","000451.jpg","000452.jpg","000453.jpg","000454.jpg","000455.jpg","000456.jpg","000457.jpg","000458.jpg","000459.jpg","000460.jpg","000461.jpg","000462.jpg","000463.jpg","000464.jpg","000465.jpg","000466.jpg","000467.jpg","000468.jpg","000469.jpg","000470.jpg","000471.jpg","000472.jpg","000473.jpg","000474.jpg","000475.jpg","000476.jpg","000477.jpg","000478.jpg","000479.jpg","000480.jpg","000481.jpg","000482.jpg","000483.jpg","000484.jpg","000485.jpg","000486.jpg","000487.jpg","000488.jpg","000489.jpg","000490.jpg","000491.jpg","000492.jpg","000498.jpg","000511.jpg","198699.jpg","198700.jpg","198701.jpg","198711.jpg","198712.jpg","198713.jpg","198729.jpg","198805.jpg","199084.jpg","199108.jpg"],
    Deepfake: ["fake_0.jpg","Fake_0Testfake.jpg","Fake_0Valfake.jpg","fake_1.jpg","fake_10.jpg","Fake_10Testfake.jpg","Fake_10Valfake.jpg","fake_11.jpg","Fake_11Testfake.jpg","Fake_11Valfake.jpg","fake_12.jpg","Fake_12Testfake.jpg","Fake_12Valfake.jpg","fake_13.jpg","Fake_13Testfake.jpg","Fake_13Valfake.jpg","fake_14.jpg","Fake_14Testfake.jpg","Fake_14Valfake.jpg","fake_15.jpg","Fake_15Testfake.jpg","Fake_15Valfake.jpg","fake_16.jpg","Fake_16Testfake.jpg","Fake_16Valfake.jpg","fake_17.jpg","Fake_17Testfake.jpg","Fake_17Valfake.jpg","fake_18.jpg","Fake_18Testfake.jpg","Fake_18Valfake.jpg","fake_19.jpg","Fake_19Testfake.jpg","Fake_19Valfake.jpg","Fake_1Testfake.jpg","Fake_1Valfake.jpg","fake_2.jpg","fake_20.jpg","Fake_20Testfake.jpg","Fake_20Valfake.jpg","fake_21.jpg","Fake_21Testfake.jpg","Fake_21Valfake.jpg","fake_22.jpg","Fake_22Testfake.jpg","Fake_22Valfake.jpg","fake_23.jpg","Fake_23Testfake.jpg","Fake_23Valfake.jpg","fake_24.jpg","Fake_24Testfake.jpg","Fake_24Valfake.jpg","fake_25.jpg","Fake_25Testfake.jpg","Fake_25Valfake.jpg","fake_26.jpg","Fake_26Testfake.jpg","Fake_26Valfake.jpg","fake_27.jpg","Fake_27Testfake.jpg","Fake_27Valfake.jpg","fake_28.jpg","Fake_28Testfake.jpg","Fake_28Valfake.jpg","fake_29.jpg","Fake_29Testfake.jpg","Fake_29Valfake.jpg","Fake_2Testfake.jpg","Fake_2Valfake.jpg","fake_3.jpg","fake_30.jpg","Fake_30Testfake.jpg","Fake_30Valfake.jpg","Fake_31Testfake.jpg","Fake_31Valfake.jpg","fake_32.jpg","Fake_32Testfake.jpg","Fake_32Valfake.jpg","fake_33.jpg","Fake_33Testfake.jpg","Fake_3Testfake.jpg","Fake_3Valfake.jpg","fake_4.jpg","Fake_4Testfake.jpg","Fake_4Valfake.jpg","fake_5.jpg","Fake_5Testfake.jpg","Fake_5Valfake.jpg","fake_6.jpg","Fake_6Testfake.jpg","Fake_6Valfake.jpg","fake_7.jpg","Fake_7Testfake.jpg","Fake_7Valfake.jpg","fake_8.jpg","Fake_8Testfake.jpg","Fake_8Valfake.jpg","fake_9.jpg","Fake_9Testfake.jpg","Fake_9Valfake.jpg"],
    Generated: ["G_image_100_1.jpg","G_image_103_1.jpg","G_image_104_1.jpg","G_image_105_1.jpg","G_image_10_1.jpg","G_image_11_1.jpg","G_image_12_1.jpg","G_image_13_1.jpg","G_image_14_1.jpg","G_image_15_1.jpg","G_image_16_1.jpg","G_image_17_1.jpg","G_image_18_1.jpg","G_image_19_1.jpg","G_image_1_1.jpg","G_image_20_1.jpg","G_image_21_1.jpg","G_image_22_1.jpg","G_image_23_1.jpg","G_image_24_1.jpg","G_image_25_1.jpg","G_image_26_1.jpg","G_image_27_1.jpg","G_image_28_1.jpg","G_image_29_1.jpg","G_image_2_1.jpg","G_image_30_1.jpg","G_image_31_1.jpg","G_image_32_1.jpg","G_image_33_1.jpg","G_image_34_1.jpg","G_image_35_1.jpg","G_image_36_1.jpg","G_image_37_1.jpg","G_image_38_1.jpg","G_image_39_1.jpg","G_image_3_1.jpg","G_image_40_1.jpg","G_image_41_1.jpg","G_image_42_1.jpg","G_image_43_1.jpg","G_image_44_1.jpg","G_image_45_1.jpg","G_image_46_1.jpg","G_image_47_1.jpg","G_image_48_1.jpg","G_image_49_1.jpg","G_image_4_1.jpg","G_image_50_1.jpg","G_image_51_1.jpg","G_image_52_1.jpg","G_image_53_1.jpg","G_image_54_1.jpg","G_image_55_1.jpg","G_image_56_1.jpg","G_image_57_1.jpg","G_image_58_1.jpg","G_image_59_1.jpg","G_image_5_1.jpg","G_image_60_1.jpg","G_image_61_1.jpg","G_image_62_1.jpg","G_image_63_1.jpg","G_image_64_1.jpg","G_image_65_1.jpg","G_image_66_1.jpg","G_image_67_1.jpg","G_image_68_1.jpg","G_image_69_1.jpg","G_image_6_1.jpg","G_image_70_1.jpg","G_image_71_1.jpg","G_image_72_1.jpg","G_image_73_1.jpg","G_image_74_1.jpg","G_image_75_1.jpg","G_image_76_1.jpg","G_image_77_1.jpg","G_image_78_1.jpg","G_image_79_1.jpg","G_image_7_1.jpg","G_image_80_1.jpg","G_image_81_1.jpg","G_image_83_1.jpg","G_image_84_1.jpg","G_image_86_1.jpg","G_image_87_1.jpg","G_image_88_1.jpg","G_image_89_1.jpg","G_image_8_1.jpg","G_image_90_1.jpg","G_image_91_1.jpg","G_image_92_1.jpg","G_image_93_1.jpg","G_image_94_1.jpg","G_image_95_1.jpg","G_image_96_1.jpg","G_image_97_1.jpg","G_image_98_1.jpg","G_image_9_1.jpg"],
  };

  useEffect(() => {
    fetchImages();
  }, [selectedCategory]);

  const fetchImages = () => {
    // Mocking the API call
    const fetchedImages = mockImages[selectedCategory];
    setImages(fetchedImages);
    shuffleImages(fetchedImages);
  };

  const shuffleImages = (images) => {
    const shuffled = [...images].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  };
  return (
    <div>
      <div className="text-center my-4">
        <h3 className="dataset-title">Training Dataset Samples</h3>
        <p className="dataset-description">
          These images are used for training our deepfake detection model. Below is a sample of the images categorized as Real, DeepFake, and Generated. Click on the tabs to view different categories.
        </p>
      </div>
      <nav>
      <ul className="nav nav-tabs justify-content-center">
        <li className="nav-item">
          <a 
            className={`nav-link ${selectedCategory === 'Real' ? 'active' : ''}`} 
            aria-current={selectedCategory === 'Real' ? 'page' : undefined}
            onClick={() => setSelectedCategory('Real')}
          >
            Real
          </a>
        </li>
        <li className="nav-item">
          <a 
            className={`nav-link ${selectedCategory === 'Deepfake' ? 'active' : ''}`} 
            onClick={() => setSelectedCategory('Deepfake')}
          >
            DeepFake
          </a>
        </li>
        <li className="nav-item">
          <a 
            className={`nav-link ${selectedCategory === 'Generated' ? 'active' : ''}`} 
            onClick={() => setSelectedCategory('Generated')}
          >
            Generated
          </a>
        </li>
      </ul>
      </nav>

      <div className="container">
        <div className="row">
          {shuffledImages.map((img, index) => (
            <div key={index} className="col-2" style={{ flex: "0 0 20%", maxWidth: "20%" }}>
              <img
                src={`/images/${img}`}
                alt={img}
                className="img-fluid"
                style={{ margin: "10px 0" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
