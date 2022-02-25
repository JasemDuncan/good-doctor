# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Doctor.create(
  [
    {
      name: 'Dr. William A. Abdu',
      age: 54,
      specialization: 'Orthopedics',
      bookingFee: 100,
      image_data: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-good-doctor-cast-hill-harper-marcus-andrews-1609969478.jpg?crop=1.00xw:0.670xh;0,0.0625xh&resize=480:*',
      biography: 'Dr. Abdu is an Associate Professor of Orthopedics and of The Dartmouth Institute Medical Director at Dartmouth-Hitchcock Medical Center Dr. Abdu got his accreditation in 1985 from Tufts University. He is a pioneer in the study and treatment of spine-related conditions. He hones surgery of the Spine, including Cervical, Thoracic and Lumbar Disorders, Disk Herniation, Spinal Stenosis, Spondylolisthesis, Spondylotic Myelopathy, Spinal Cord Injury, and Spine Trauma. Also, he had discovered many new techniques for spine treatment.'  
    },
    {  
      name: 'Dr. Myles. B. Abbott',
      age: 69,
      specialization: 'Pediatrician',
      bookingFee: 150,
      image_data: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-good-doctor-cast-noah-galvin-asher-wolke-1609969792.jpg?crop=0.752xw:0.502xh;0.0765xw,0.0522xh&resize=480:*',
      biography: 'Dr. Myles is also one of the best-known doctors of Pediatricians in the world. He graduated from the University of Miami Leonard M Miller School of Medicine in 1972. He treats the problems of growth and child development. Dr. Myles currently practices at East Bay Pediatric & Medical Group and is affiliated with Alta Bates Summit Medical Center Alta Bates Campus and Children’s Hospital & Research Center Oakland.'
    },
    {  
      name: 'Dr. Fouad. M. Abbas',
      age: 49,
      specialization: 'Gynecologist',
      bookingFee: 170,
      image_data: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-good-doctor-cast-fiona-gubelmann-1609968871.jpg?crop=0.913xw:0.610xh;0.0391xw,0.110xh&resize=480:*',
      biography: 'Dr. Abbas is a well-known Gynecologist/Oncologist. His specialization field is Oncologist of Obstetrician and Gynecology. He is also considered to be one of the best doctors of Oncology in the world. The term Oncology is the study of cancer. Dr. Abbas graduated from the University of Maryland School of Medicine in 1986. Currently, he is affiliated with Medstar Harbor Hospital and Sinai Hospital Of Baltimore.'
    },
    {  
      name: 'Dr. Khalid Abbed',
      age: 33,
      specialization: 'Neurosurgery',
      bookingFee: 250,
      image_data: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-good-doctor-cast-antonia-thomas-claire-browne-1609968592.jpg?crop=0.906xw:0.727xh;0,0.0382xh&resize=480:*',
      biography: 'Dr. Khalid is a famous doctor of Neuro. He is an Associate Professor and Chief of the Spine Section in the Department of Neurosurgery. His area of clinical interest is in the treatment of spinal disorders. Dr. Khalid obtained his bachelor’s degree in Biological Sciences from the University of Illinois in Champaign-Urbana in 1993. He continued his education in the same University and received his Doctor of Medicine degree with Honors in 1999. Currently, he is working at Yale as a Director of the Spine Surgery Department. Many consider him the best doctor in the world.'
    },
    {  
      name: 'Dr. Naresh Trehan',
      age: 54,
      specialization: 'Ophthalmology',
      bookingFee: 99,
      image_data: 'https://cdn1.edgedatg.com/aws/v2/abc/TheGoodDoctor/person/2057217/940a0a319f940a38d6740423183e5df1/330x330-Q90_940a0a319f940a38d6740423183e5df1.jpg',
      biography: 'Dr. Naresh is a famous Indian cardiovascular and cardiothoracic surgeon. He was born on August 12, 1946, in Delhi, India. He obtained a medical degree from King George’s Medical College in Lucknow. Dr. Naresh was also the founder, executive director, and chief cardiovascular surgeon of Escorts Heart Institute and Research Center (EHIRC), New Delhi, India. At present, he is serving as a Chairman and Managing Director and Chief Cardiac Surgeon of MedantaTM-The Medicity, one of the largest multi-speciality hospitals at Gurgaon, Haryana.'
    },
    {  
      name: 'Dr. Arthur Reese Abright',
      age: 40,
      specialization: 'Psychiatry',
      bookingFee: 129,
      image_data: 'https://cdn1.edgedatg.com/aws/v2/abc/TheGoodDoctor/person/2198201/38d475919f6c51848247b23697701a91/579x579-Q90_38d475919f6c51848247b23697701a91.jpg',
      biography: 'Dr. Reese is one of the best doctors of Psychiatry. She treats the problems of depressions and mind-related problems. She is considered world’s best doctor by many. Dr. Reese got her accreditation from The University of Texas Southwestern Medical School. She is also an expert on mood disorders and anxiety. Currently, she is working as a Professor of Psychiatry at Icahn School of Medicine at Mount Sinai. She is also affiliated with Mount Sinai Services Elmhurst Hospital Center and New York Medical College at present.'
    }
  ]
)
