"use client";

import { useState } from "react";
import {
  TextField,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { jobCreation } from "@/services/apis/apis";

interface JobCreationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JobCreationModal({
  isOpen,
  onClose,
}: JobCreationModalProps) {
  const validationSchema = Yup.object({
    jobTitle: Yup.string().required("Job Title is required"),
    companyName: Yup.string().required("Company Name is required"),
    location: Yup.string().required("Location is required"),
    jobType: Yup.string().required("Job Type is required"),
    experience: Yup.string().required("Experience is required"),
    minSalary: Yup.number()
      .transform((value, originalValue) =>
        originalValue === "" ? undefined : Number(originalValue)
      )
      .typeError("Salary must be a number")
      .min(0, "Salary must be positive")
      .required("Minimum Salary is required"),
    maxSalary: Yup.number()
      .transform((value, originalValue) =>
        originalValue === "" ? undefined : Number(originalValue)
      )
      .typeError("Salary must be a number")
      .min(Yup.ref("minSalary"), "Max Salary must be greater than Min Salary")
      .required("Maximum Salary is required"),
    applicationDeadline: Yup.date().required(
      "Application Deadline is required"
    ),
    workLocation: Yup.string().required("Work Location is required"),
    responsibilities: Yup.string().required("Responsibilities are required"),
    requirements: Yup.string().required("Requirements are required"),
    jobDescription: Yup.string().required("Job Description is required"),
    companyLogo: Yup.mixed().test(
      "fileRequired",
      "Company logo is required",
      (value) => value && value instanceof File
    ),
  });

  const formik = useFormik({
    initialValues: {
      jobTitle: "",
      companyName: "",
      location: "",
      jobType: "",
      experience: "",
      minSalary: 0,
      maxSalary: 0,
      applicationDeadline: null,
      workLocation: "",
      responsibilities: "",
      requirements: "",
      jobDescription: "",
      companyLogo: [], // File upload
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("check", values);
      try {
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
          formData.append(key, value as any);
        });
        console.log("formdata",formData)
        const response = await jobCreation(formData)

        console.log("Job posted successfully:", response);
        onClose();
      } catch (error) {
        console.error("Error posting job:", error);
      }
    },
  });

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle className="text-xl font-semibold text-center flex justify-between items-center relative">
        Create Job Opening
        <IconButton
          onClick={onClose}
          className="absolute top-2 right-2"
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent className="space-y-6 p-6">
          <div className="grid grid-cols-6 gap-6 mt-5">
            <TextField
              fullWidth
              label="Job Title"
              name="jobTitle"
              value={formik.values.jobTitle}
              onChange={formik.handleChange}
              error={formik.touched.jobTitle && Boolean(formik.errors.jobTitle)}
              helperText={formik.touched.jobTitle && formik.errors.jobTitle}
              className="col-span-3"
            />
            <TextField
              fullWidth
              label="Company Name"
              name="companyName"
              value={formik.values.companyName}
              onChange={formik.handleChange}
              error={
                formik.touched.companyName && Boolean(formik.errors.companyName)
              }
              helperText={
                formik.touched.companyName && formik.errors.companyName
              }
              className="col-span-3"
            />
            <TextField
              fullWidth
              label="Location"
              name="location"
              value={formik.values.location}
              onChange={formik.handleChange}
              error={formik.touched.location && Boolean(formik.errors.location)}
              helperText={formik.touched.location && formik.errors.location}
              className="col-span-2"
            />
            <TextField
              fullWidth
              label="Job Type"
              name="jobType"
              value={formik.values.jobType}
              onChange={formik.handleChange}
              error={formik.touched.jobType && Boolean(formik.errors.jobType)}
              helperText={formik.touched.jobType && formik.errors.jobType}
              className="col-span-2"
            />
            <TextField
              fullWidth
              label="Experience"
              name="experience"
              value={formik.values.experience}
              onChange={formik.handleChange}
              error={
                formik.touched.experience && Boolean(formik.errors.experience)
              }
              helperText={formik.touched.experience && formik.errors.experience}
              className="col-span-2"
            />
            <TextField
              fullWidth
              label="Salary (Min ₹)"
              name="minSalary"
              type="number"
              value={formik.values.minSalary}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue("minSalary", Number(e.target.value))
              }
              error={
                formik.touched.minSalary && Boolean(formik.errors.minSalary)
              }
              helperText={formik.touched.minSalary && formik.errors.minSalary}
              className="col-span-2"
            />
            <TextField
              fullWidth
              label="Salary (Max ₹)"
              name="maxSalary"
              type="number"
              value={formik.values.maxSalary}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue("maxSalary", Number(e.target.value))
              }
              error={
                formik.touched.maxSalary && Boolean(formik.errors.maxSalary)
              }
              helperText={formik.touched.maxSalary && formik.errors.maxSalary}
              className="col-span-2"
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Application Deadline"
                value={formik.values.applicationDeadline}
                onChange={(newValue) =>
                  formik.setFieldValue("applicationDeadline", newValue)
                }
                className="col-span-2"
                slotProps={{
                  textField: {
                    error:
                      formik.touched.applicationDeadline &&
                      Boolean(formik.errors.applicationDeadline),
                    helperText:
                      formik.touched.applicationDeadline &&
                      formik.errors.applicationDeadline,
                    fullWidth: true,
                  },
                }}
              />
            </LocalizationProvider>

            {/* Company Logo Upload */}
            <div className="col-span-3">
              <TextField
                fullWidth
                label="Company Logo"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <IconButton component="label">
                      <input
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={(e) =>
                          formik.setFieldValue(
                            "companyLogo",
                            e.target.files?.[0]
                          )
                        }
                      />
                      <InsertPhotoIcon /> {/* Image upload icon */}
                    </IconButton>
                  ),
                  readOnly: true,
                }}
                value={
                  formik.values.companyLogo instanceof File
                    ? formik.values.companyLogo.name
                    : "No file selected"
                }
                error={
                  formik.touched.companyLogo &&
                  Boolean(formik.errors.companyLogo)
                }
                helperText={
                  formik.touched.companyLogo &&
                  String(formik.errors.companyLogo)
                }
              />
            </div>

            {/* Work Location */}
            <TextField
              fullWidth
              label="Work Location"
              name="workLocation"
              value={formik.values.workLocation}
              onChange={formik.handleChange}
              error={
                formik.touched.workLocation &&
                Boolean(formik.errors.workLocation)
              }
              helperText={
                formik.touched.workLocation && formik.errors.workLocation
              }
              className="col-span-3"
            />
          </div>

          <div>
            {/* Job Description field */}
            <TextField
              fullWidth
              label="Responsibilities"
              name="responsibilities"
              multiline
              rows={4}
              value={formik.values.responsibilities}
              onChange={formik.handleChange}
              error={
                formik.touched.responsibilities &&
                Boolean(formik.errors.responsibilities)
              }
              helperText={
                formik.touched.responsibilities &&
                formik.errors.responsibilities
              }
            />
          </div>

          <div>
            {/* job Requirements field */}
            <TextField
              fullWidth
              label="Requirements"
              name="requirements"
              multiline
              rows={4}
              value={formik.values.requirements}
              onChange={formik.handleChange}
              error={
                formik.touched.requirements &&
                Boolean(formik.errors.requirements)
              }
              helperText={
                formik.touched.requirements && formik.errors.requirements
              }
            />
          </div>

          <div>
            {/* job Job Description field */}

            <TextField
              fullWidth
              label="Job Description"
              name="jobDescription"
              multiline
              rows={4}
              value={formik.values.jobDescription}
              onChange={formik.handleChange}
              error={
                formik.touched.jobDescription &&
                Boolean(formik.errors.jobDescription)
              }
              helperText={
                formik.touched.jobDescription && formik.errors.jobDescription
              }
            />
          </div>
        </DialogContent>
        <DialogActions className="p-6 flex justify-between">
          <Button
            variant="outlined"
            startIcon={<KeyboardArrowDownIcon />}
            onClick={onClose}
          >
            Save Draft
          </Button>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            type="submit"
          >
            Publish
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
