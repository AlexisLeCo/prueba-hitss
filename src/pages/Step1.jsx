import { useState } from "react";

import WizardLayout from "../components/Layout/WizardLayout";
import StepSidebar from "../components/Sidebar/StepSidebar";
import PlanCard from "../components/Cards/PlanCard";
import WizardNavigation from "../components/Navigation/WizardNavigation";

function Step1({ nextStep }) {
  const [selectedPlan, setSelectedPlan] = useState(1);

  const plans = [
    {
      id: 1,
      title: "28506 - Plan Conect Star EMP 35GB FIN",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      id: 2,
      title: "28506 - Plan Conect Star EMP 35GB FIN",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      id: 3,
      title: "28506 - Plan Conect Star EMP 35GB FIN",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
  ];

  return (
    <>
      <WizardLayout
        sidebar={
          <StepSidebar
            step={1}
            title="Plan Asignado"
            description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
          />
        }
      >
        <div className="plans-list">
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              title={plan.title}
              description={plan.description}
              selected={selectedPlan === plan.id}
              onClick={() => setSelectedPlan(plan.id)}
            />
          ))}
        </div>
      </WizardLayout>

      <div className="wizard-actions">
        <WizardNavigation showBack={false} onNext={nextStep} />
      </div>
    </>
  );
}

export default Step1;