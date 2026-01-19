interface Step {
  number: string;
  title: string;
  text: string;
}

interface ProcessTimelineProps {
  steps: Step[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <div key={index} className="relative">
          {/* Connector line for desktop */}
          {index < steps.length - 1 && (
            <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-terracotta/30" />
          )}

          <div className="flex flex-col items-center text-center">
            {/* Number circle */}
            <div className="w-16 h-16 rounded-full bg-terracotta text-white flex items-center justify-center text-2xl font-bold mb-4 relative z-10">
              {step.number}
            </div>

            <h3 className="text-lg font-bold text-navy mb-2">{step.title}</h3>
            <p className="text-charcoal text-sm">{step.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
