if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let m={};const f=e=>a(e,r),o={module:{uri:r},exports:m,require:f};i[r]=Promise.all(s.map((e=>o[e]||f(e)))).then((e=>(d(...e),m)))}}define(["./workbox-9d06fa15"],(function(e){"use strict";e.setCacheNameDetails({prefix:"itk-vtk-viewer-"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"124.itkVtkViewer.js",revision:"d756b8378323f31f568e18546b728dfd"},{url:"itk/image-io/BMPImageIOReadImage.js",revision:"0afeec0cab7bb9620e689eb971cf6bbf"},{url:"itk/image-io/BMPImageIOReadImage.umd.js",revision:"31bfb9b0753f572d56f401757f61ee03"},{url:"itk/image-io/BMPImageIOWriteImage.js",revision:"d72568e5f84eb1abb9f4c2e3de805a22"},{url:"itk/image-io/BMPImageIOWriteImage.umd.js",revision:"63873ad6d425b185f9cfdb924453ce64"},{url:"itk/image-io/BioRadImageIOReadImage.js",revision:"2f456219d8feeeb6581cb38642082ab3"},{url:"itk/image-io/BioRadImageIOReadImage.umd.js",revision:"7fd5d168b8d5766f942edffd4e262771"},{url:"itk/image-io/BioRadImageIOWriteImage.js",revision:"180b3ff01b9ebecb73bf0df84be0510b"},{url:"itk/image-io/BioRadImageIOWriteImage.umd.js",revision:"29c4c15cea005e51e6461c6a9f986771"},{url:"itk/image-io/CompressStringify.js",revision:"6bb92a0173bf47526ce48d25a7380b50"},{url:"itk/image-io/CompressStringify.umd.js",revision:"e8ebcc1f8e5f9eee206dd7655c441fef"},{url:"itk/image-io/FDFImageIOReadImage.js",revision:"6ae09145f985127fa656eebb32121ba0"},{url:"itk/image-io/FDFImageIOReadImage.umd.js",revision:"38450b44fa5c8dbbff0736dd2ba461bc"},{url:"itk/image-io/FDFImageIOWriteImage.js",revision:"97cf8477aa51d42f45ac387096c36629"},{url:"itk/image-io/FDFImageIOWriteImage.umd.js",revision:"9785cd1cc03fc0ad46637c3ccf6aa94a"},{url:"itk/image-io/GDCMImageIOReadImage.js",revision:"f332d44b04432fb2f565304b2d21788e"},{url:"itk/image-io/GDCMImageIOReadImage.umd.js",revision:"06086c7536cda301442f18122082839c"},{url:"itk/image-io/GDCMImageIOWriteImage.js",revision:"5f7e5e8b0f9db95a98698db69b81ae92"},{url:"itk/image-io/GDCMImageIOWriteImage.umd.js",revision:"98281e42e9459466016ab848fcd83a10"},{url:"itk/image-io/GE4ImageIOReadImage.js",revision:"90de3857b0c9c6d5347e294743bbfa38"},{url:"itk/image-io/GE4ImageIOReadImage.umd.js",revision:"bab9d41144d45030032427aab26fab3e"},{url:"itk/image-io/GE4ImageIOWriteImage.js",revision:"85078c6ce7f2f1b32bdc2e5e77f42595"},{url:"itk/image-io/GE4ImageIOWriteImage.umd.js",revision:"ab701c98ea4e6423a42c2f8ed6d0d7d8"},{url:"itk/image-io/GE5ImageIOReadImage.js",revision:"94ea572a762e2ddbeced023fec306e1c"},{url:"itk/image-io/GE5ImageIOReadImage.umd.js",revision:"a506cf40cbce4f8f69a9297059f4856c"},{url:"itk/image-io/GE5ImageIOWriteImage.js",revision:"160a4015d1a2f7dfbdafccc50a3d1cae"},{url:"itk/image-io/GE5ImageIOWriteImage.umd.js",revision:"a72d0d15095a46642cde0f8d554fd427"},{url:"itk/image-io/GEAdwImageIOReadImage.js",revision:"fa5064a896d5a7c52499a4f29ffd5262"},{url:"itk/image-io/GEAdwImageIOReadImage.umd.js",revision:"5e90bedd510c9955d1da306c0d6426b0"},{url:"itk/image-io/GEAdwImageIOWriteImage.js",revision:"85cd002ae38e539fbd2fcaafa1d5a3b5"},{url:"itk/image-io/GEAdwImageIOWriteImage.umd.js",revision:"6a09cbb79b4a9f7b1f4d65e405d0e167"},{url:"itk/image-io/GiplImageIOReadImage.js",revision:"776fa627a1202e7a69a1f4fc4a7ee73c"},{url:"itk/image-io/GiplImageIOReadImage.umd.js",revision:"d2af1ce427a3ee3dd632afb2bd7d685f"},{url:"itk/image-io/GiplImageIOWriteImage.js",revision:"a0aaf7795b80f636b05c7858ead5c32d"},{url:"itk/image-io/GiplImageIOWriteImage.umd.js",revision:"5ed427faf3f389fd70c6541831460e40"},{url:"itk/image-io/HDF5ImageIOReadImage.js",revision:"6675f0cabaa2f7a0133f8370f2ed434c"},{url:"itk/image-io/HDF5ImageIOReadImage.umd.js",revision:"a8e680f559a46023bda47b5628840eb7"},{url:"itk/image-io/HDF5ImageIOWriteImage.js",revision:"3946a5fc8b43b617f1cb73126ae3ccdb"},{url:"itk/image-io/HDF5ImageIOWriteImage.umd.js",revision:"3fc64ce913d798cc42a1dcd3722faec1"},{url:"itk/image-io/JPEGImageIOReadImage.js",revision:"9425cf0065f3458eebcf6a4e29e5fcf8"},{url:"itk/image-io/JPEGImageIOReadImage.umd.js",revision:"77dbc66a4349f47b8847c29de6dd2575"},{url:"itk/image-io/JPEGImageIOWriteImage.js",revision:"3e388e12c42ae9a4054c464754fbbf04"},{url:"itk/image-io/JPEGImageIOWriteImage.umd.js",revision:"1babaca42d89992200d24fe956178f9f"},{url:"itk/image-io/LSMImageIOReadImage.js",revision:"1f47915bea4b2978fc5aac69017752fd"},{url:"itk/image-io/LSMImageIOReadImage.umd.js",revision:"6a604ee4c631430c5c79c591ab42fbe0"},{url:"itk/image-io/LSMImageIOWriteImage.js",revision:"0ee711fb899fb683e7165c6188988cde"},{url:"itk/image-io/LSMImageIOWriteImage.umd.js",revision:"a7da422f9039fd63a478e091d6ae3b8d"},{url:"itk/image-io/MGHImageIOReadImage.js",revision:"a26d9090ad45f8bd895b5df2c00ab6aa"},{url:"itk/image-io/MGHImageIOReadImage.umd.js",revision:"96577a28698ce6d5a5a82e41cd5fdc4f"},{url:"itk/image-io/MGHImageIOWriteImage.js",revision:"882098682e2c6f1c84991d59200e83f2"},{url:"itk/image-io/MGHImageIOWriteImage.umd.js",revision:"cdf35e56c14c19b52867d0dd9618e535"},{url:"itk/image-io/MINCImageIOReadImage.js",revision:"1d977eafba772a71c84d421314f88e81"},{url:"itk/image-io/MINCImageIOReadImage.umd.js",revision:"b1316c3764d579c8dc5025f8eedfa241"},{url:"itk/image-io/MINCImageIOWriteImage.js",revision:"e4cd121e36ac0981547d82f691174736"},{url:"itk/image-io/MINCImageIOWriteImage.umd.js",revision:"309da86232dd2032b332656b4c170f6a"},{url:"itk/image-io/MRCImageIOReadImage.js",revision:"05b0b78977b50eb880bd35c27b1c5856"},{url:"itk/image-io/MRCImageIOReadImage.umd.js",revision:"1e7a0a0ae55bcbf7c59a1767d191a855"},{url:"itk/image-io/MRCImageIOWriteImage.js",revision:"2587ab0e9ee8a9a9e57d410a4a6707d9"},{url:"itk/image-io/MRCImageIOWriteImage.umd.js",revision:"92a1f4d40cb95b076f8b3f50423d28c2"},{url:"itk/image-io/MetaImageIOReadImage.js",revision:"c82e10bea9b2423e115a07c8170c64e8"},{url:"itk/image-io/MetaImageIOReadImage.umd.js",revision:"c8b1fe3471095055c83175a2b5ffb308"},{url:"itk/image-io/MetaImageIOWriteImage.js",revision:"d9980186caa495211fe17ab5f4090a3f"},{url:"itk/image-io/MetaImageIOWriteImage.umd.js",revision:"2980d0904b6ce825388ffc5f18b841a8"},{url:"itk/image-io/NiftiImageIOReadImage.js",revision:"de26cf3b3042a1f0f7ed15f1447a38f7"},{url:"itk/image-io/NiftiImageIOReadImage.umd.js",revision:"fb0dde878d0820e01950a92ae4d2426b"},{url:"itk/image-io/NiftiImageIOWriteImage.js",revision:"aad4ecbfd0e7053dc29b032b7e0401bb"},{url:"itk/image-io/NiftiImageIOWriteImage.umd.js",revision:"96043da50b5894ce20ac91caec3e0003"},{url:"itk/image-io/NrrdImageIOReadImage.js",revision:"61bfb5ed4eecc885da36c0b45bfdbdf7"},{url:"itk/image-io/NrrdImageIOReadImage.umd.js",revision:"3efe04273ac825df325cef6d120b412a"},{url:"itk/image-io/NrrdImageIOWriteImage.js",revision:"202b1ac0ef3455c9298fdc7ff99d6800"},{url:"itk/image-io/NrrdImageIOWriteImage.umd.js",revision:"2d48af73f4a38fcf7d2fa1743ad69f8c"},{url:"itk/image-io/PNGImageIOReadImage.js",revision:"765c11687531b48bf5e0be0ab5f3b91e"},{url:"itk/image-io/PNGImageIOReadImage.umd.js",revision:"a8810633128fbbb94fb042fce1ff4d25"},{url:"itk/image-io/PNGImageIOWriteImage.js",revision:"c5ef4a1ba904dbe15a3701a812844ed9"},{url:"itk/image-io/PNGImageIOWriteImage.umd.js",revision:"dea25b5f6e5165e08be27f89d4cbf3cf"},{url:"itk/image-io/ParseStringDecompress.js",revision:"34769daf4e4478512749604700712ab3"},{url:"itk/image-io/ParseStringDecompress.umd.js",revision:"3a3ebce9fe47f8eea54b4f1c5e669ea1"},{url:"itk/image-io/ReadDICOMTags.js",revision:"eab4f6c09566935beb1d1254d3bb8c87"},{url:"itk/image-io/ReadDICOMTags.umd.js",revision:"84eb3a44ab0ff831e0aa27f916b6377c"},{url:"itk/image-io/ReadImageDICOMFileSeries.js",revision:"ebe05935f12ae7ae2c02e5500e01fd7c"},{url:"itk/image-io/ReadImageDICOMFileSeries.umd.js",revision:"3513d5cee2220e3b2bd2c8fe80787a7b"},{url:"itk/image-io/ScancoImageIOReadImage.js",revision:"6dbff067d4d2bcefbc4eba32c50fe7e2"},{url:"itk/image-io/ScancoImageIOReadImage.umd.js",revision:"d4fb976f25f483269a1bc22516da526c"},{url:"itk/image-io/ScancoImageIOWriteImage.js",revision:"86ec3a4032ff07878eb9b648ffb114b9"},{url:"itk/image-io/ScancoImageIOWriteImage.umd.js",revision:"16fbab8cb09946d39ea0dc14146c8d25"},{url:"itk/image-io/TIFFImageIOReadImage.js",revision:"62f283657e1ac3daeb0cd065cade0150"},{url:"itk/image-io/TIFFImageIOReadImage.umd.js",revision:"ba9dc899da3ca3831612133d611baa26"},{url:"itk/image-io/TIFFImageIOWriteImage.js",revision:"58c69e08e504d854c70420d9f045050d"},{url:"itk/image-io/TIFFImageIOWriteImage.umd.js",revision:"3767aee4cf3603ff9232b24be37f3bc8"},{url:"itk/image-io/VTKImageIOReadImage.js",revision:"04ff43a73feacb3a54f5307c44f57937"},{url:"itk/image-io/VTKImageIOReadImage.umd.js",revision:"4f492dbde97e8034b2a08bd6d3335325"},{url:"itk/image-io/VTKImageIOWriteImage.js",revision:"4f391e7108f385a199606d9e8fcae20e"},{url:"itk/image-io/VTKImageIOWriteImage.umd.js",revision:"52f750054c2dd8c8fb55634f2d888e29"},{url:"itk/image-io/WASMImageIOReadImage.js",revision:"a28d08ae3da42085c0ee39b5377b4a95"},{url:"itk/image-io/WASMImageIOReadImage.umd.js",revision:"9bde2117bf9577a655c62f760c8e89fc"},{url:"itk/image-io/WASMImageIOWriteImage.js",revision:"1daeee30ab9e7a9a662e97e3815f245d"},{url:"itk/image-io/WASMImageIOWriteImage.umd.js",revision:"3b346352debf89d6d3b1c4150eddb655"},{url:"itk/image-io/WASMZstdImageIOReadImage.js",revision:"976f97c8922629d1f3f1951ca0ba0f69"},{url:"itk/image-io/WASMZstdImageIOReadImage.umd.js",revision:"efa498fefa1b9dc4d8f535a0b4f8e740"},{url:"itk/image-io/WASMZstdImageIOWriteImage.js",revision:"6cd1c0081fda5ba93193e5a2f37fa61e"},{url:"itk/image-io/WASMZstdImageIOWriteImage.umd.js",revision:"79b04d8202b1dbd4ca1c32b8d461a725"},{url:"itk/image-io/index.js",revision:"8691558457bebac75c4da487e9a8d234"},{url:"itk/mesh-io/BYUMeshIOReadMesh.js",revision:"bf8db11497e6f6b95f84aebb4aff633c"},{url:"itk/mesh-io/BYUMeshIOReadMesh.umd.js",revision:"8808e2ae1252012f0e680f2403dcca1b"},{url:"itk/mesh-io/BYUMeshIOWriteMesh.js",revision:"f4ef03b1beb3cc7d6e1bf856d7e9f2e3"},{url:"itk/mesh-io/BYUMeshIOWriteMesh.umd.js",revision:"41e00679f77624d1872afafab60abf6e"},{url:"itk/mesh-io/FreeSurferAsciiMeshIOReadMesh.js",revision:"a024d02a8175f5fb36043e0a96e20014"},{url:"itk/mesh-io/FreeSurferAsciiMeshIOReadMesh.umd.js",revision:"8f2d2796ca598abdabb79e4284c9b704"},{url:"itk/mesh-io/FreeSurferAsciiMeshIOWriteMesh.js",revision:"b9979acde69ef073ad60d3a33ea96ec3"},{url:"itk/mesh-io/FreeSurferAsciiMeshIOWriteMesh.umd.js",revision:"2055d853e510feaeb946744a5efde2eb"},{url:"itk/mesh-io/FreeSurferBinaryMeshIOReadMesh.js",revision:"ed0a7276f145d1366c68a11425c1a8ea"},{url:"itk/mesh-io/FreeSurferBinaryMeshIOReadMesh.umd.js",revision:"f095c82cd61c242cbb93dace22daa5ac"},{url:"itk/mesh-io/FreeSurferBinaryMeshIOWriteMesh.js",revision:"9f6adfeb678629a8a33d688e608cc3eb"},{url:"itk/mesh-io/FreeSurferBinaryMeshIOWriteMesh.umd.js",revision:"be47d1476fd5ca613165961608e9cf3a"},{url:"itk/mesh-io/MeshToPolyData.js",revision:"fd496769012e5f1e355d2994d7bab2eb"},{url:"itk/mesh-io/MeshToPolyData.umd.js",revision:"b89b756f87f3c9f365d8cfdacb3e998d"},{url:"itk/mesh-io/OBJMeshIOReadMesh.js",revision:"61d301ed5d8005460e8ad4feeaeda012"},{url:"itk/mesh-io/OBJMeshIOReadMesh.umd.js",revision:"98402bb721186fbb022b9183f32a9cb0"},{url:"itk/mesh-io/OBJMeshIOWriteMesh.js",revision:"344cd414bea58f91802e5d721aae273a"},{url:"itk/mesh-io/OBJMeshIOWriteMesh.umd.js",revision:"cfb9d49c8355691d4cabe8bbd87aec70"},{url:"itk/mesh-io/OFFMeshIOReadMesh.js",revision:"7c8cfb766af58d21206756ec3f9a5024"},{url:"itk/mesh-io/OFFMeshIOReadMesh.umd.js",revision:"eb33bd2ca2e3b6b75ea291c140432019"},{url:"itk/mesh-io/OFFMeshIOWriteMesh.js",revision:"d6c5198669427f4dd85cd1913fdf4855"},{url:"itk/mesh-io/OFFMeshIOWriteMesh.umd.js",revision:"a6f6cf7acca80148dee6a13a26a723b7"},{url:"itk/mesh-io/PolyDataToMesh.js",revision:"ad60bd4bab595834c2373c10bdeb3d99"},{url:"itk/mesh-io/PolyDataToMesh.umd.js",revision:"81a6433a63a9965ffc7825d16a927500"},{url:"itk/mesh-io/STLMeshIOReadMesh.js",revision:"937eba910f217c1bebd1cf76e114f3eb"},{url:"itk/mesh-io/STLMeshIOReadMesh.umd.js",revision:"1ae734c0aa4edce802da8fd9d61ff3f2"},{url:"itk/mesh-io/STLMeshIOWriteMesh.js",revision:"73b05bbc470f1b5d19850a17af328e7d"},{url:"itk/mesh-io/STLMeshIOWriteMesh.umd.js",revision:"655308e60b59f9731a371f2d7b50626f"},{url:"itk/mesh-io/VTKPolyDataMeshIOReadMesh.js",revision:"a89048bd6f8dfe2c1846732bb2e1f88a"},{url:"itk/mesh-io/VTKPolyDataMeshIOReadMesh.umd.js",revision:"e21be95ac9cbdf714bff16294719c86e"},{url:"itk/mesh-io/VTKPolyDataMeshIOWriteMesh.js",revision:"9d540bd8735e9b324b70c556fbe424d2"},{url:"itk/mesh-io/VTKPolyDataMeshIOWriteMesh.umd.js",revision:"49ed3e6991446b18669c79ca91a1c67d"},{url:"itk/mesh-io/WASMMeshIOReadMesh.js",revision:"e52c74be251107e8be0b8ccef4ce1623"},{url:"itk/mesh-io/WASMMeshIOReadMesh.umd.js",revision:"935e8062d684923d167a2f15fa142400"},{url:"itk/mesh-io/WASMMeshIOWriteMesh.js",revision:"49c7bb347170b2e3b6bf13b9104b7d47"},{url:"itk/mesh-io/WASMMeshIOWriteMesh.umd.js",revision:"dca17a1f7d184806c7f7d95539aeabaf"},{url:"itk/mesh-io/WASMZstdMeshIOReadMesh.js",revision:"87bc5ba01484fc5ef292db5671728196"},{url:"itk/mesh-io/WASMZstdMeshIOReadMesh.umd.js",revision:"052473ac2c0c16590594d0c3c3bff386"},{url:"itk/mesh-io/WASMZstdMeshIOWriteMesh.js",revision:"343884a3e437eec15b5ec6eeedaa1426"},{url:"itk/mesh-io/WASMZstdMeshIOWriteMesh.umd.js",revision:"63c0ff7cd2bead736796779dcb275fab"},{url:"itk/mesh-io/index.js",revision:"8cb91fae3ecf710de4bd84e9408ad1f5"},{url:"itk/pipeline/BloscZarr.js",revision:"82ff3e4e79279c049b372bce7d5581f5"},{url:"itk/pipeline/BloscZarr.umd.js",revision:"6f1f2c1c25fdb1db4d5e9279116e0e46"},{url:"itk/pipeline/Downsample.js",revision:"093442a2dd1a5bd8bea5d44bd8928482"},{url:"itk/pipeline/Downsample.umd.js",revision:"24734a2135cb0b39778a2555589f9297"},{url:"itk/pipeline/DownsampleLabelImage.js",revision:"2bb923b36ac7cd7f75ed96bad390852a"},{url:"itk/pipeline/DownsampleLabelImage.umd.js",revision:"ab5f0492858a525c2a7d4b66bddc7a4f"},{url:"itk/web-workers/IOInput.js",revision:"99ba9a1b47bfa8e89f5f59423e160557"},{url:"itk/web-workers/ITKConfig.js",revision:"99ba9a1b47bfa8e89f5f59423e160557"},{url:"itk/web-workers/RunPipelineInput.js",revision:"99ba9a1b47bfa8e89f5f59423e160557"},{url:"itk/web-workers/WebWorkerInput.js",revision:"99ba9a1b47bfa8e89f5f59423e160557"},{url:"itk/web-workers/bundles/pipeline.worker.js",revision:"9397c760bd01e6eb60cd383015beb9f6"},{url:"itk/web-workers/loadImageIOPipelineModule.js",revision:"1e587e4f9f02e40e53e0f62126ff4d6c"},{url:"itk/web-workers/loadMeshIOPipelineModule.js",revision:"cf62e944f07486410cb251d2f7281291"},{url:"itk/web-workers/loadPipelineModule.js",revision:"6fe0cc1fb1e78a669383684c3a59be6e"},{url:"itk/web-workers/min-bundles/pipeline.worker.js",revision:"18604280fbc621850caf3a9d6e732307"},{url:"itk/web-workers/pipeline.worker.js",revision:"fcade677d45da0746e8b2abba4ae98ed"},{url:"itk/web-workers/runPipeline.js",revision:"01b4ef63574db0600aa6f38718a0de5d"},{url:"itkVtkViewer.js",revision:"7598bf0753f0d1833380d111bd6483e7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/(\.js|\.png|\.wasm)$/,new e.StaleWhileRevalidate({cacheName:"itk-vtk-viewer-StaleWhileRevalidate",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:1209600})]}),"GET")}));
