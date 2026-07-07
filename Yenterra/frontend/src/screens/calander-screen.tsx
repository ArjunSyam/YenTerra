import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SpendingSummary } from "@/components/dashboard/spending-summary";
import { BudgetVsSpending } from "@/components/dashboard/budget-vs-spending";
import { DAILY_SPENDING, CURRENT_TIME } from "@/constants/mock-data";
import type { DailySpend } from "@/lib/types";
import { useDayPicker } from "react-day-picker";

export function CalendarScreen() {
  const [selected, setSelected] = useState<Date | undefined>(undefined);
  const [open, setOpen] = useState(false);

  const getSpendForDate = (date: Date): DailySpend | undefined => {
    const key = date.toISOString().split("T")[0];
    return DAILY_SPENDING.find((d) => d.date === key);
  };

  const selectedSpend = selected ? getSpendForDate(selected) : undefined;

  function handleDayClick(date: Date | undefined) {
    if (!date) return;
    setSelected(date);
    const spend = getSpendForDate(date);
    if (spend) setOpen(true);
  }

  return (
    <div className="w-full h-full flex flex-col">
      <Calendar
        mode="single"
        selected={selected}
        onSelect={handleDayClick}
        className="w-full min-h-full flex-1"
        classNames={{
          months: "w-full h-full flex flex-col",
          month: "w-full h-full flex flex-col",
          month_grid: "w-full border-collapse",
          weekdays: "grid grid-cols-7 border-b border-border",
          weekday:
            "text-muted-foreground text-sm font-medium text-center py-3 border-r border-border last:border-r-0",
          week: "grid grid-cols-7 border-b border-border last:border-b-0",
          day: "border-r border-border last:border-r-0 min-h-[120px] relative",
          day_button: "absolute inset-0 w-full h-full",
          selected: "bg-primary/20",
          today: "bg-muted/30",
          outside: "opacity-30",
        }}
        components={{
          Nav: () => null,
          MonthCaption: ({ calendarMonth }) => {
            const { goToMonth, nextMonth, previousMonth } = useDayPicker();
            return (
              <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                <span className="text-lg font-semibold">
                  {calendarMonth.date.toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => previousMonth && goToMonth(previousMonth)}
                    className="h-7 w-7 flex items-center justify-center rounded hover:bg-muted transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => nextMonth && goToMonth(nextMonth)}
                    className="h-7 w-7 flex items-center justify-center rounded hover:bg-muted transition-colors"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          },
          DayButton: ({ day, modifiers, className, ...props }) => {
            const spend = getSpendForDate(day.date);
            return (
              <button
                {...props}
                className={`${className} w-full h-full flex flex-col items-start justify-start p-2 hover:bg-muted/40 transition-colors`}
                data-selected={modifiers.selected}
              >
                <span
                  className={`text-sm font-medium ${
                    modifiers.today
                      ? "bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center"
                      : ""
                  }`}
                >
                  {day.date.getDate()}
                </span>
                {spend && (
                  <span className="text-xs text-destructive font-semibold mt-1">
                    -${spend.totalSpent}
                  </span>
                )}
              </button>
            );
          },
        }}
      />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl w-[90vw] max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl">
              {selected?.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </DialogTitle>
          </DialogHeader>
          {selectedSpend && (
            <div className="flex flex-col lg:flex-row gap-6 pt-2">
              <div className="flex-1 min-w-0">
                <SpendingSummary
                  data={selectedSpend.categories}
                  time={CURRENT_TIME}
                />
              </div>
              <div className="flex-1 min-w-0">
                <BudgetVsSpending Chartdata={selectedSpend.categories} />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
