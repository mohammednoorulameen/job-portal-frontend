"use client"

import { useForm, Controller } from "react-hook-form"
import { Search, MapPin, Briefcase } from "lucide-react"

interface FilterSectionProps {
  onFilter: (filters: any) => void
}

export default function FilterSection({ onFilter }: FilterSectionProps) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      search: "",
      location: "",
      jobType: "",
      salaryRange: [0, 2000],
    },
  })

  const onSubmit = (data: any) => {
    onFilter(data)
  }

  return (
    <div className="mb-2 p-4 shadow-sm rounded-lg bg-white">
      <form>
        <div className="flex w-full flex-wrap items-center justify-between gap-1 md:flex-nowrap">
          {/* Search Input */}
          <div className="min-w-[200px] flex-1 pr-4 border-r border-gray-300">
            <Controller
              name="search"
              control={control}
              render={({ field }) => (
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                  <input
                    {...field}
                    placeholder="Search By Job Title, Role"
                    className="px-3 py-2 pl-8 text-sm w-full outline-none bg-transparent"
                    onChange={(e) => {
                      field.onChange(e)
                      handleSubmit(onSubmit)()
                    }}
                  />
                </div>
              )}
            />
          </div>

          {/* Location Select */}
          <div className="min-w-[180px] flex-1 px-4 border-r border-gray-300">
            <Controller
              name="location"
              control={control}
              render={({ field }) => (
                <div className="relative">
                  <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                  <select
                    className="px-3 py-2 pl-8 text-sm w-full outline-none bg-transparent"
                    onChange={(e) => {
                      field.onChange(e.target.value)
                      handleSubmit(onSubmit)()
                    }}
                  >
                    <option value="any">Any Location</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Chennai">Chennai</option>
                  </select>
                </div>
              )}
            />
          </div>

          {/* Job Type Select */}
          <div className="min-w-[180px] flex-1 px-4 border-r border-gray-300">
            <Controller
              name="jobType"
              control={control}
              render={({ field }) => (
                <div className="relative">
                  <Briefcase className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                  <select
                    className="px-3 py-2 pl-8 text-sm w-full outline-none bg-transparent"
                    onChange={(e) => {
                      field.onChange(e.target.value)
                      handleSubmit(onSubmit)()
                    }}
                  >
                    <option value="any">Any Type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Freelance">Freelance</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
              )}
            />
          </div>

          {/* Salary Range Slider */}
          <div className="min-w-[200px] flex-1 px-4">
            <Controller
              name="salaryRange"
              control={control}
              render={({ field: { value, onChange } }) => (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium">Salary Per Month</span>
                    <span className="text-xs">
                      ₹{value[0]}k - ₹{value[1]}k
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    step="5"
                    className="w-full"
                    value={value[0]}
                    onChange={(e) => onChange([Number(e.target.value), value[1]])}
                  />
                </div>
              )}
            />
          </div>
        </div>
      </form>
    </div>
  )
}


