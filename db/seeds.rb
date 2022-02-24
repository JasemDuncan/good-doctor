# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


# User.create(
#   name: "Jasem Valencia",
#   username: "jasem1",
#   age: "19",
#   password: "password"
# )

# User.create(
#   name: "Nakitto Catherine",
#   username: "ncathie2",
#   age: "25",
#   password: "password"
# )

# Doctor.create(
#   [
#     {
#       name: 'Dr. William A. Abdu',
#       age: 54,
#       specialization: 'Orthopedics',
#       bookingFee: 100,
#       biography: 'Dr. Abdu is an Associate Professor of Orthopedics and of The Dartmouth Institute Medical Director at Dartmouth-Hitchcock Medical Center Dr. Abdu got his accreditation in 1985 from Tufts University. He is a pioneer in the study and treatment of spine-related conditions. He hones surgery of the Spine, including Cervical, Thoracic and Lumbar Disorders, Disk Herniation, Spinal Stenosis, Spondylolisthesis, Spondylotic Myelopathy, Spinal Cord Injury, and Spine Trauma. Also, he had discovered many new techniques for spine treatment.'  
#     },
#     {  
#       name: 'Dr. Myles. B. Abbott',
#       age: 69,
#       specialization: 'Pediatrician',
#       bookingFee: 150,
#       biography: 'Dr. Myles is also one of the best-known doctors of Pediatricians in the world. He graduated from the University of Miami Leonard M Miller School of Medicine in 1972. He treats the problems of growth and child development. Dr. Myles currently practices at East Bay Pediatric & Medical Group and is affiliated with Alta Bates Summit Medical Center Alta Bates Campus and Children’s Hospital & Research Center Oakland.'
#     },
#     {  
#       name: 'Dr. Fouad. M. Abbas',
#       age: 49,
#       specialization: 'Gynecologist',
#       bookingFee: 170,
#       biography: 'Dr. Abbas is a well-known Gynecologist/Oncologist. His specialization field is Oncologist of Obstetrician and Gynecology. He is also considered to be one of the best doctors of Oncology in the world. The term Oncology is the study of cancer. Dr. Abbas graduated from the University of Maryland School of Medicine in 1986. Currently, he is affiliated with Medstar Harbor Hospital and Sinai Hospital Of Baltimore.'
#     },
#     {  
#       name: 'Dr. Khalid Abbed',
#       age: 34,
#       specialization: 'Neurosurgery',
#       bookingFee: 250,
#       biography: 'Dr. Khalid is a famous doctor of Neuro. He is an Associate Professor and Chief of the Spine Section in the Department of Neurosurgery. His area of clinical interest is in the treatment of spinal disorders. Dr. Khalid obtained his bachelor’s degree in Biological Sciences from the University of Illinois in Champaign-Urbana in 1993. He continued his education in the same University and received his Doctor of Medicine degree with Honors in 1999. Currently, he is working at Yale as a Director of the Spine Surgery Department. Many consider him the best doctor in the world.'
#     },
#     {  
#       name: 'Dr. Naresh Trehan',
#       age: 51,
#       specialization: 'Ophthalmology',
#       bookingFee: 99,
#       biography: 'Dr. Naresh is a famous Indian cardiovascular and cardiothoracic surgeon. He was born on August 12, 1946, in Delhi, India. He obtained a medical degree from King George’s Medical College in Lucknow. Dr. Naresh was also the founder, executive director, and chief cardiovascular surgeon of Escorts Heart Institute and Research Center (EHIRC), New Delhi, India. At present, he is serving as a Chairman and Managing Director and Chief Cardiac Surgeon of MedantaTM-The Medicity, one of the largest multi-speciality hospitals at Gurgaon, Haryana.'
#     },
#     {  
#       name: 'Dr. Arthur Reese Abright',
#       age: 46,
#       specialization: 'Psychiatry',
#       bookingFee: 129,
#       biography: 'Dr. Reese is one of the best doctors of Psychiatry. She treats the problems of depressions and mind-related problems. She is considered world’s best doctor by many. Dr. Reese got her accreditation from The University of Texas Southwestern Medical School. She is also an expert on mood disorders and anxiety. Currently, she is working as a Professor of Psychiatry at Icahn School of Medicine at Mount Sinai. She is also affiliated with Mount Sinai Services Elmhurst Hospital Center and New York Medical College at present.'
#     }
#   ]
# )


10.times do 
  Location.create(name:Faker::Address.city)
end

# Appointment.create(
#   user_id: 1,
#   doctor_id: 1,
#   location_id: 1,
#   appointment_date: "2022-02-21"
# )

# Appointment.create(
#   user_id: 2,
#   doctor_id: 2,
#   location_id: 2,
#   appointment_date: "2022-02-22"
# )

# Appointment.create(
#   user_id: 1,
#   doctor_id: 1,
#   location_id: 4,
#   appointment_date: "2022-02-23"
# )