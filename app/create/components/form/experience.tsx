import React from 'react';
import { useFieldArray, useFormContext, Controller } from 'react-hook-form';
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const ExperiencesForm: React.FC = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });

  const addNewExperience = () => {
    append({
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: ['']
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Experiences</h2>
      {fields.map((field, index) => (
        <div key={field.id} className="rounded-md space-y-4 mt-4">
          <Controller
            name={`experiences.${index}.company`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Controller
            name={`experiences.${index}.position`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>Position</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Controller
            name={`experiences.${index}.startDate`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>Start Date</FormLabel>
                <FormControl>
                  <Input placeholder="YYYY-MM" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Controller
            name={`experiences.${index}.endDate`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>End Date</FormLabel>
                <FormControl>
                  <Input placeholder="YYYY-MM or 'present'" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DescriptionPointsField experienceIndex={index} />
          <Button type="button" variant="destructive" onClick={() => remove(index)}>
            Remove Experience
          </Button>
        </div>
      ))}
      <Button
        type="button"
        onClick={addNewExperience}
      >
        Add Experience
      </Button>
    </div>
  );
};

const DescriptionPointsField: React.FC<{ experienceIndex: number }> = ({ experienceIndex }) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: `experiences.${experienceIndex}.description`,
  });

  return (
    <div className="space-y-2 flex flex-col gap-2">
      <FormLabel>Description Points</FormLabel>
      {fields.map((field, index) => (
        <div key={field.id} className="flex items-center space-x-2">
          <Controller
            name={`experiences.${experienceIndex}.description.${index}`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormControl>
                  <Input {...field} placeholder="Description point" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="button" variant="destructive" size="sm" onClick={() => remove(index)}>
            Remove
          </Button>
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => append('')}
      >
        Add Description Point
      </Button>
    </div>
  );
};
