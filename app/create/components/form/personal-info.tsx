import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const PersonalInfoForm: React.FC = () => {
  const { control } = useFormContext();

  return (
    <div className="space-y-4 rounded p-4">
      {/* <h2 className="text-lg font-semibold">Personal Information</h2> */}
      <Controller
        control={control}
        name="personalInfo.name"
        defaultValue=""
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="John Doe" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Controller
        control={control}
        name="personalInfo.email"
        defaultValue=""
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="john@example.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Controller
        control={control}
        name="personalInfo.phone"
        defaultValue=""
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone</FormLabel>
            <FormControl>
              <Input type="tel" placeholder="+1234567890" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
